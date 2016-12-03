// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
// import { refreshToken } from 'utils/tokenManager';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

// const localStorage = global.window.localStorage;
// const checkNRefreshToken = (isHome) => (nextState, replace, callback) => {
//  if (localStorage.access_token && Date.now() < localStorage.expires_in - 10000) {
//    if (isHome) {
//      replace('/home');
//    }
//    return callback();
//  }
//
//  if (!localStorage.refresh_token) {
//    if (window.location.pathname !== '/') {
//      replace('/');
//    }
//    callback();
//  } else {
//    refreshToken()
//      .then(() => {
//        if (isHome) {
//          replace('/home');
//        }
//        callback();
//      })
//      .catch((error) => {
//        replace('/');
//        callback(error);
//      });
//  }
//  return true;
// };

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/LoginPage/reducer'),
          System.import('containers/LoginPage/sagas'),
          System.import('containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('login', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/',
      // onEnter: checkNRefreshToken(),
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Dashboard'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          indexRoute: {
            getComponent(nextState, cb) {
              const importModules = Promise.all([
                System.import('containers/HomePage'),
              ]);

              const renderRoute = loadModule(cb);

              importModules.then(([component]) => {
                renderRoute(component);
              });

              importModules.catch(errorLoading);
            },
          },
        },
        {
          path: '/user',
          getComponent(nextState, cb) {
            const importModules = Promise.all([
              System.import('containers/UserPage/reducer'),
              System.import('containers/UserPage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([reducer, component]) => {
              injectReducer('userDetails', reducer.default);
              renderRoute(component);
            });

            importModules.catch(errorLoading);
          },
        },
      ],
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
