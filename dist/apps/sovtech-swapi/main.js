(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/data-access/src/index.ts":
/*!********************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/data-access/src/index.ts ***!
  \********************************************************************************/
/*! exports provided: columns, initialRowType, DATA, DataAccess, FetchPeopleDocument, useFetchPeopleQuery, useFetchPeopleLazyQuery, FetchPageDocument, useFetchPageQuery, useFetchPageLazyQuery, FetchPersonDocument, useFetchPersonQuery, useFetchPersonLazyQuery, InitialPeopleState, initialPeopleContext, PeopleContext, PeopleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_people_grid_data_people_grid_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/people-grid-data/people-grid-data */ "../../../libs/data-access/src/lib/people-grid-data/people-grid-data.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return _lib_people_grid_data_people_grid_data__WEBPACK_IMPORTED_MODULE_0__["columns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialRowType", function() { return _lib_people_grid_data_people_grid_data__WEBPACK_IMPORTED_MODULE_0__["initialRowType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return _lib_people_grid_data_people_grid_data__WEBPACK_IMPORTED_MODULE_0__["DATA"]; });

/* harmony import */ var _lib_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/data-access */ "../../../libs/data-access/src/lib/data-access.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataAccess", function() { return _lib_data_access__WEBPACK_IMPORTED_MODULE_1__["DataAccess"]; });

/* harmony import */ var _lib_generated_generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/generated/generated */ "../../../libs/data-access/src/lib/generated/generated.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchPeopleDocument", function() { return _lib_generated_generated__WEBPACK_IMPORTED_MODULE_2__["FetchPeopleDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFetchPeopleQuery", function() { return _lib_generated_generated__WEBPACK_IMPORTED_MODULE_2__["useFetchPeopleQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFetchPeopleLazyQuery", function() { return _lib_generated_generated__WEBPACK_IMPORTED_MODULE_2__["useFetchPeopleLazyQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchPageDocument", function() { return _lib_generated_generated__WEBPACK_IMPORTED_MODULE_2__["FetchPageDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFetchPageQuery", function() { return _lib_generated_generated__WEBPACK_IMPORTED_MODULE_2__["useFetchPageQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFetchPageLazyQuery", function() { return _lib_generated_generated__WEBPACK_IMPORTED_MODULE_2__["useFetchPageLazyQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FetchPersonDocument", function() { return _lib_generated_generated__WEBPACK_IMPORTED_MODULE_2__["FetchPersonDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFetchPersonQuery", function() { return _lib_generated_generated__WEBPACK_IMPORTED_MODULE_2__["useFetchPersonQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFetchPersonLazyQuery", function() { return _lib_generated_generated__WEBPACK_IMPORTED_MODULE_2__["useFetchPersonLazyQuery"]; });

/* harmony import */ var _lib_state_context_PeopleContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/state/context/PeopleContext */ "../../../libs/data-access/src/lib/state/context/PeopleContext.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitialPeopleState", function() { return _lib_state_context_PeopleContext__WEBPACK_IMPORTED_MODULE_3__["InitialPeopleState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialPeopleContext", function() { return _lib_state_context_PeopleContext__WEBPACK_IMPORTED_MODULE_3__["initialPeopleContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeopleContext", function() { return _lib_state_context_PeopleContext__WEBPACK_IMPORTED_MODULE_3__["PeopleContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeopleProvider", function() { return _lib_state_context_PeopleContext__WEBPACK_IMPORTED_MODULE_3__["PeopleProvider"]; });






/***/ }),

/***/ "../../../libs/data-access/src/lib/data-access.module.css":
/*!**************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/data-access/src/lib/data-access.module.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!../../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./data-access.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../libs/data-access/src/lib/data-access.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/data-access/src/lib/data-access.tsx":
/*!*******************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/data-access/src/lib/data-access.tsx ***!
  \*******************************************************************************************/
/*! exports provided: DataAccess, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAccess", function() { return DataAccess; });
/* harmony import */ var _data_access_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-access.module.css */ "../../../libs/data-access/src/lib/data-access.module.css");
/* harmony import */ var _data_access_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_access_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/data-access/src/lib/data-access.tsx";

/* eslint-disable-next-line */


function DataAccess(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "Welcome to DataAccess!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (DataAccess);

/***/ }),

/***/ "../../../libs/data-access/src/lib/generated/generated.tsx":
/*!***************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/data-access/src/lib/generated/generated.tsx ***!
  \***************************************************************************************************/
/*! exports provided: FetchPeopleDocument, useFetchPeopleQuery, useFetchPeopleLazyQuery, FetchPageDocument, useFetchPageQuery, useFetchPageLazyQuery, FetchPersonDocument, useFetchPersonQuery, useFetchPersonLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPeopleDocument", function() { return FetchPeopleDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchPeopleQuery", function() { return useFetchPeopleQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchPeopleLazyQuery", function() { return useFetchPeopleLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPageDocument", function() { return FetchPageDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchPageQuery", function() { return useFetchPageQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchPageLazyQuery", function() { return useFetchPageLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchPersonDocument", function() { return FetchPersonDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchPersonQuery", function() { return useFetchPersonQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchPersonLazyQuery", function() { return useFetchPersonLazyQuery; });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "../../../node_modules/@apollo/client/index.js");
let _ = t => t,
    _t,
    _t2,
    _t3;




const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */

const FetchPeopleDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_t || (_t = _`
    query fetchPeople {
  fetchPeople {
    count
    next
    previous
    people {
      name
      gender
      skin_color
      hair_color
      height
      eye_color
      mass
      birth_year
    }
  }
}
    `));
/**
 * __useFetchPeopleQuery__
 *
 * To run a query within a React component, call `useFetchPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPeopleQuery({
 *   variables: {
 *   },
 * });
 */

function useFetchPeopleQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"](FetchPeopleDocument, options);
}
function useFetchPeopleLazyQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](FetchPeopleDocument, options);
}
const FetchPageDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_t2 || (_t2 = _`
    query fetchPage($fetchPagePage: String) {
  fetchPage(page: $fetchPagePage) {
    count
    next
    previous
    people {
      name
      gender
      skin_color
      hair_color
      height
      eye_color
      mass
      birth_year
    }
  }
}
    `));
/**
 * __useFetchPageQuery__
 *
 * To run a query within a React component, call `useFetchPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPageQuery({
 *   variables: {
 *      fetchPagePage: // value for 'fetchPagePage'
 *   },
 * });
 */

function useFetchPageQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"](FetchPageDocument, options);
}
function useFetchPageLazyQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](FetchPageDocument, options);
}
const FetchPersonDocument = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_t3 || (_t3 = _`
    query fetchPerson($name: String) {
  fetchPerson(name: $name) {
    people {
      name
      gender
      skin_color
      hair_color
      height
      eye_color
      mass
      birth_year
    }
  }
}
    `));
/**
 * __useFetchPersonQuery__
 *
 * To run a query within a React component, call `useFetchPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPersonQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */

function useFetchPersonQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"](FetchPersonDocument, options);
}
function useFetchPersonLazyQuery(baseOptions) {
  const options = Object.assign({}, defaultOptions, baseOptions);
  return _apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](FetchPersonDocument, options);
}

/***/ }),

/***/ "../../../libs/data-access/src/lib/people-grid-data/people-grid-data.tsx":
/*!*****************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/data-access/src/lib/people-grid-data/people-grid-data.tsx ***!
  \*****************************************************************************************************************/
/*! exports provided: columns, initialRowType, DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return columns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialRowType", function() { return initialRowType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "../../../node_modules/grommet/es6/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/data-access/src/lib/people-grid-data/people-grid-data.tsx";


const columns = [{
  property: 'name',
  header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    children: "Character Name"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, undefined),
  primary: true
}, {
  property: 'height',
  header: 'Height'
}, {
  property: 'mass',
  header: 'Mass'
}, {
  property: 'hair_color',
  header: 'Hair Color'
}, {
  property: 'skin_color',
  header: 'Skin Color'
}, {
  property: 'eye_color',
  header: 'Eye Color'
}, {
  property: 'birth_year',
  header: 'Birth Year'
}, {
  property: 'gender',
  header: 'Gender'
}];
const initialRowType = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: ''
};
const DATA = data => {
  let x = initialRowType;

  if (data) {
    var _data$fetchPage, _data$fetchPage$peopl;

    const ret = (_data$fetchPage = data.fetchPage) == null ? void 0 : (_data$fetchPage$peopl = _data$fetchPage.people) == null ? void 0 : _data$fetchPage$peopl.map((person, index) => {
      x = {
        name: person == null ? void 0 : person.name,
        height: person == null ? void 0 : person.height,
        mass: person == null ? void 0 : person.mass,
        hair_color: person == null ? void 0 : person.hair_color,
        skin_color: person == null ? void 0 : person.skin_color,
        eye_color: person == null ? void 0 : person.eye_color,
        birth_year: person == null ? void 0 : person.birth_year,
        gender: person == null ? void 0 : person.birth_year
      };
      return x;
    });
    return ret;
  }

  return [x];
};

/***/ }),

/***/ "../../../libs/data-access/src/lib/state/context/PeopleContext.tsx":
/*!***********************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/data-access/src/lib/state/context/PeopleContext.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: InitialPeopleState, initialPeopleContext, PeopleContext, PeopleProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPeopleState", function() { return InitialPeopleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPeopleContext", function() { return initialPeopleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleContext", function() { return PeopleContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleProvider", function() { return PeopleProvider; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _people_grid_data_people_grid_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../people-grid-data/people-grid-data */ "../../../libs/data-access/src/lib/people-grid-data/people-grid-data.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducer_PeopleReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducer/PeopleReducer */ "../../../libs/data-access/src/lib/state/reducer/PeopleReducer.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/data-access/src/lib/state/context/PeopleContext.tsx";






const InitialPeopleState = {
  show: false,
  person: _people_grid_data_people_grid_data__WEBPACK_IMPORTED_MODULE_2__["initialRowType"],
  currentPage: 1,
  characterSearch: '',
  pageSearch: 1
};
const initialPeopleContext = {
  state: {
    currentPage: 1
  },
  getPeopleState: () => InitialPeopleState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setShowPerson: x => x,
  setPeopleData: x => x,
  setCurrentPage: x => x,
  setCharacterSearch: x => x,
  setPageSearch: x => x
};
const PeopleContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])(initialPeopleContext);
const PeopleProvider = ({
  children
}) => {
  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(_reducer_PeopleReducer__WEBPACK_IMPORTED_MODULE_4__["PeopleReducer"], InitialPeopleState);
  const setPeopleData = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(data => {
    dispatch({
      handler: 'PERSON_DATA',
      payload: {
        person: data
      }
    });
  }, [dispatch]);
  const setShowPerson = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(data => {
    dispatch({
      handler: 'SHOW_PERSON',
      payload: {
        show: data
      }
    });
  }, [dispatch]);
  const setCurrentPage = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(data => {
    dispatch({
      handler: 'SET_PAGE',
      payload: {
        currentPage: data
      }
    });
  }, [dispatch]);
  const setCharacterSearch = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(data => {
    dispatch({
      handler: 'SET_CHARACTER_SEARCH',
      payload: {
        characterSearch: data
      }
    });
  }, [dispatch]);
  const setPageSearch = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(data => {
    dispatch({
      handler: 'SET_PAGE_SEARCH',
      payload: {
        pageSearch: data
      }
    });
  }, [dispatch]);

  const getPeopleState = () => state;

  const value = {
    state,
    getPeopleState,
    setShowPerson,
    setPeopleData,
    setCurrentPage,
    setCharacterSearch,
    setPageSearch
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(PeopleContext.Provider, {
    value: value,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../../libs/data-access/src/lib/state/reducer/PeopleReducer.tsx":
/*!***********************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/data-access/src/lib/state/reducer/PeopleReducer.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: PeopleReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleReducer", function() { return PeopleReducer; });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);

const PeopleReducer = (state, action) => {
  console.log('This is reducer', {
    action,
    state
  });
  const {
    handler
  } = action;

  if (handler === 'SHOW_PERSON') {
    console.log(action);
    state = Object.assign({}, state, {
      show: action.payload.show
    });
    return state;
  }

  if (handler === 'PERSON_DATA') {
    state = Object.assign({}, state, {
      person: action.payload.person
    });
  }

  if (handler === 'SET_PAGE_SEARCH') {
    state = Object.assign({}, state, {
      pageSearch: action.payload.pageSearch
    });
  }

  if (handler === 'SET_CHARACTER_SEARCH') {
    state = Object.assign({}, state, {
      characterSearch: action.payload.characterSearch
    });
  }

  if (handler === 'SET_PAGE') {
    state = Object.assign({}, state, {
      currentPage: action.payload.currentPage
    });
  }

  return state;
};

/***/ }),

/***/ "../../../libs/feature-sets/src/index.ts":
/*!*********************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/index.ts ***!
  \*********************************************************************************/
/*! exports provided: Starwars, PeopleGrid, columns, initialRowType, DATA, SwPagination, List, ListItem, Person, Heading, PeopleList, FeatureSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_starwars_starwars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/starwars/starwars */ "../../../libs/feature-sets/src/lib/starwars/starwars.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Starwars", function() { return _lib_starwars_starwars__WEBPACK_IMPORTED_MODULE_0__["Starwars"]; });

/* harmony import */ var _lib_people_grid_people_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/people-grid/people-grid */ "../../../libs/feature-sets/src/lib/people-grid/people-grid.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeopleGrid", function() { return _lib_people_grid_people_grid__WEBPACK_IMPORTED_MODULE_1__["PeopleGrid"]; });

/* harmony import */ var _lib_people_grid_people_grid_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/people-grid/people-grid-data */ "../../../libs/feature-sets/src/lib/people-grid/people-grid-data.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return _lib_people_grid_people_grid_data__WEBPACK_IMPORTED_MODULE_2__["columns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialRowType", function() { return _lib_people_grid_people_grid_data__WEBPACK_IMPORTED_MODULE_2__["initialRowType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return _lib_people_grid_people_grid_data__WEBPACK_IMPORTED_MODULE_2__["DATA"]; });

/* harmony import */ var _lib_sw_pagination_sw_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/sw-pagination/sw-pagination */ "../../../libs/feature-sets/src/lib/sw-pagination/sw-pagination.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwPagination", function() { return _lib_sw_pagination_sw_pagination__WEBPACK_IMPORTED_MODULE_3__["SwPagination"]; });

/* harmony import */ var _lib_list_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/list/list */ "../../../libs/feature-sets/src/lib/list/list.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _lib_list_list__WEBPACK_IMPORTED_MODULE_4__["List"]; });

/* harmony import */ var _lib_list_item_list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/list-item/list-item */ "../../../libs/feature-sets/src/lib/list-item/list-item.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return _lib_list_item_list_item__WEBPACK_IMPORTED_MODULE_5__["ListItem"]; });

/* harmony import */ var _lib_person_person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/person/person */ "../../../libs/feature-sets/src/lib/person/person.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return _lib_person_person__WEBPACK_IMPORTED_MODULE_6__["Person"]; });

/* harmony import */ var _lib_header_heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/header/heading */ "../../../libs/feature-sets/src/lib/header/heading.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _lib_header_heading__WEBPACK_IMPORTED_MODULE_7__["Heading"]; });

/* harmony import */ var _lib_people_list_people_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/people-list/people-list */ "../../../libs/feature-sets/src/lib/people-list/people-list.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PeopleList", function() { return _lib_people_list_people_list__WEBPACK_IMPORTED_MODULE_8__["PeopleList"]; });

/* harmony import */ var _lib_feature_sets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/feature-sets */ "../../../libs/feature-sets/src/lib/feature-sets.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureSets", function() { return _lib_feature_sets__WEBPACK_IMPORTED_MODULE_9__["FeatureSets"]; });












/***/ }),

/***/ "../../../libs/feature-sets/src/lib/feature-sets.module.css":
/*!****************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/feature-sets.module.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!../../../../node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!./feature-sets.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../libs/feature-sets/src/lib/feature-sets.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/feature-sets/src/lib/feature-sets.tsx":
/*!*********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/feature-sets.tsx ***!
  \*********************************************************************************************/
/*! exports provided: FeatureSets, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureSets", function() { return FeatureSets; });
/* harmony import */ var _feature_sets_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-sets.module.css */ "../../../libs/feature-sets/src/lib/feature-sets.module.css");
/* harmony import */ var _feature_sets_module_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_feature_sets_module_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/feature-sets.tsx";

/* eslint-disable-next-line */


function FeatureSets(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "Welcome to FeatureSets!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (FeatureSets);

/***/ }),

/***/ "../../../libs/feature-sets/src/lib/header/heading.tsx":
/*!***********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/header/heading.tsx ***!
  \***********************************************************************************************/
/*! exports provided: Heading, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "../../../node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet-icons */ "../../../node_modules/grommet-icons/es6/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
let _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/header/heading.tsx",
    _ = t => t,
    _t;




/* eslint-disable-next-line */


const StyledHeading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t || (_t = _`
  color: pink;
`));
function Heading(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledHeading, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Header"], {
      background: "light-4",
      pad: "medium",
      height: "xsmall",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Anchor"], {
        href: "/",
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Grommet"], {
          color: "brand"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this),
        label: "Cor le Roux"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["ResponsiveContext"].Consumer, {
        children: size => size === 'small' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
          justify: "end",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Menu"], {
            a11yTitle: "Navigation Menu",
            dropProps: {
              align: {
                top: 'bottom',
                right: 'right'
              }
            },
            icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet_icons__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
              color: "brand"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 25
            }, this),
            items: [{
              label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
                pad: "small",
                children: "Cor le Roux"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 30
              }, this),
              href: '/'
            }]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
          justify: "end",
          direction: "row",
          gap: "medium"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "../../../libs/feature-sets/src/lib/list-item/list-item.tsx":
/*!****************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/list-item/list-item.tsx ***!
  \****************************************************************************************************/
/*! exports provided: ListItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "../../../node_modules/grommet/es6/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
let _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/list-item/list-item.tsx",
    _ = t => t,
    _t;




/* eslint-disable-next-line */


const StyledListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_t || (_t = _`
  color: pink;
`));
const ListItem = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], Object.assign({
  as: "li",
  border: props.index ? 'bottom' : 'horizontal',
  pad: "small",
  direction: "row",
  justify: "between"
}, props), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 3
}, undefined);
/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "../../../libs/feature-sets/src/lib/list/list.tsx":
/*!******************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/list/list.tsx ***!
  \******************************************************************************************/
/*! exports provided: List, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "../../../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "../../../node_modules/grommet/es6/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/list/list.tsx";


/* eslint-disable-next-line */


function List(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_1__["Box"], Object.assign({
    as: "ul"
  }, props, {
    children: props.children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "../../../libs/feature-sets/src/lib/people-grid/people-grid-data.tsx":
/*!*************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/people-grid/people-grid-data.tsx ***!
  \*************************************************************************************************************/
/*! exports provided: columns, initialRowType, DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return columns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialRowType", function() { return initialRowType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "../../../node_modules/grommet/es6/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/people-grid/people-grid-data.tsx";


const columns = [{
  property: 'name',
  header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    children: "Character Name"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }, undefined),
  primary: true
}, {
  property: 'height',
  header: 'Height'
}, {
  property: 'mass',
  header: 'Mass'
}, {
  property: 'hair_color',
  header: 'Hair Color'
}, {
  property: 'skin_color',
  header: 'Skin Color'
}, {
  property: 'eye_color',
  header: 'Eye Color'
}, {
  property: 'birth_year',
  header: 'Birth Year'
}, {
  property: 'gender',
  header: 'Gender'
}];
const initialRowType = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: ''
};
const DATA = data => {
  let x = initialRowType;

  if (data) {
    var _data$fetchPage, _data$fetchPage$peopl;

    const ret = (_data$fetchPage = data.fetchPage) == null ? void 0 : (_data$fetchPage$peopl = _data$fetchPage.people) == null ? void 0 : _data$fetchPage$peopl.map((person, index) => {
      x = {
        name: person == null ? void 0 : person.name,
        height: person == null ? void 0 : person.height,
        mass: person == null ? void 0 : person.mass,
        hair_color: person == null ? void 0 : person.hair_color,
        skin_color: person == null ? void 0 : person.skin_color,
        eye_color: person == null ? void 0 : person.eye_color,
        birth_year: person == null ? void 0 : person.birth_year,
        gender: person == null ? void 0 : person.birth_year
      };
      return x;
    });
    return ret;
  }

  return [x];
};

/***/ }),

/***/ "../../../libs/feature-sets/src/lib/people-grid/people-grid-ui.tsx":
/*!***********************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/people-grid/people-grid-ui.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: PeopleGridUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleGridUi", function() { return PeopleGridUi; });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "../../../node_modules/grommet/es6/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/people-grid/people-grid-ui.tsx";


const PeopleGridUi = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    align: "center",
    pad: "large",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["DataTable"], {
      columns: props.columns,
      data: props.tableData,
      step: 10,
      sortable: true,
      paginate: true,
      onClickRow: event => props.handleClicks(event)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "../../../libs/feature-sets/src/lib/people-grid/people-grid.tsx":
/*!********************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/people-grid/people-grid.tsx ***!
  \********************************************************************************************************/
/*! exports provided: PeopleGrid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleGrid", function() { return PeopleGrid; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _people_grid_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people-grid-data */ "../../../libs/feature-sets/src/lib/people-grid/people-grid-data.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sovtech-swapi/data-access */ "../../../libs/data-access/src/index.ts");
/* harmony import */ var _sw_pagination_sw_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sw-pagination/sw-pagination */ "../../../libs/feature-sets/src/lib/sw-pagination/sw-pagination.tsx");
/* harmony import */ var _people_grid_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./people-grid-ui */ "../../../libs/feature-sets/src/lib/people-grid/people-grid-ui.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
let _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/people-grid/people-grid.tsx",
    _ = t => t,
    _t;










/* eslint-disable-next-line */


const StyledPeopleGrid = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_t || (_t = _``));
const PeopleGrid = props => {
  const {
    state,
    getPeopleState,
    setShowPerson,
    setPeopleData,
    setCharacterSearch,
    setPageSearch,
    setCurrentPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_6__["PeopleContext"]);
  const [curPage, setCurPage] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1);
  const [thisPageData, setThisPageData] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({});

  const handleClick = event => {
    setShowPerson(true);
    setPeopleData(event.datum);
    setCharacterSearch(event.datum.name);
  };

  const {
    data,
    loading,
    error
  } = Object(_sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_6__["useFetchPageQuery"])({
    variables: {
      fetchPagePage: curPage.toString()
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (state.currentPage) {
      setCurPage(state.currentPage);
    } else {
      setCurPage(1);
    }
  }, []);
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 23
  }, undefined);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
    children: "Error - please try again later"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 21
  }, undefined);
  const tableData = Object(_people_grid_data__WEBPACK_IMPORTED_MODULE_4__["DATA"])(data);

  const updatePageHandler = page => {
    switch (page) {
      case 'next':
        if (state.currentPage) {
          setCurrentPage(state.currentPage + 1);
          setCurPage(state.currentPage + 1);
        }

        break;

      case 'previous':
        if (state.currentPage) {
          if (state.currentPage === 1) {
            setCurrentPage(state.currentPage);
            setCurPage(state.currentPage);
          }
        }

        if (state.currentPage) {
          setCurrentPage(state.currentPage - 1);
          setCurPage(state.currentPage - 1);
        }

        break;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(StyledPeopleGrid, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_people_grid_ui__WEBPACK_IMPORTED_MODULE_8__["PeopleGridUi"], {
      handleClicks: handleClick,
      tableData: tableData,
      columns: _people_grid_data__WEBPACK_IMPORTED_MODULE_4__["columns"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_sw_pagination_sw_pagination__WEBPACK_IMPORTED_MODULE_7__["SwPagination"], {
      value: state.currentPage,
      updatePage: updatePageHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (PeopleGrid);

/***/ }),

/***/ "../../../libs/feature-sets/src/lib/people-list/people-list.tsx":
/*!********************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/people-list/people-list.tsx ***!
  \********************************************************************************************************/
/*! exports provided: PeopleList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleList", function() { return PeopleList; });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "../../../node_modules/grommet/es6/index.js");
/* harmony import */ var _list_item_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-item/list-item */ "../../../libs/feature-sets/src/lib/list-item/list-item.tsx");
/* harmony import */ var _list_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list/list */ "../../../libs/feature-sets/src/lib/list/list.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sovtech-swapi/data-access */ "../../../libs/data-access/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
let _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/people-list/people-list.tsx",
    _ = t => t,
    _t;









/* eslint-disable-next-line */


const StyledPeopleList = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_t || (_t = _`
  color: black;
`));
const PeopleList = props => {
  var _data$fetchPeople, _data$fetchPeople$peo;

  const [curPage, setCurPage] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(1);
  const {
    data,
    loading,
    error
  } = Object(_sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_6__["useFetchPeopleQuery"])();
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 23
  }, undefined);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
    children: "Error - please try again later"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 21
  }, undefined);

  const handleClick = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    console.log(curPage);
    setCurPage(() => curPage + 1);
    return;
  };

  console.log(data);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(StyledPeopleList, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      align: "center",
      pad: "large",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
        level: "3",
        children: " List & ListItem "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_list_list__WEBPACK_IMPORTED_MODULE_4__["List"], {
      pad: {
        horizontal: 'large'
      },
      children: data == null ? void 0 : (_data$fetchPeople = data.fetchPeople) == null ? void 0 : (_data$fetchPeople$peo = _data$fetchPeople.people) == null ? void 0 : _data$fetchPeople$peo.map((person, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_list_item_list_item__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        index: index,
        onClick: handleClick,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          children: person == null ? void 0 : person.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          children: person == null ? void 0 : person.gender
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, undefined)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (PeopleList);

/***/ }),

/***/ "../../../libs/feature-sets/src/lib/person/person.tsx":
/*!**********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/person/person.tsx ***!
  \**********************************************************************************************/
/*! exports provided: Person, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "../../../node_modules/grommet/es6/index.js");
/* harmony import */ var _list_item_list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list-item/list-item */ "../../../libs/feature-sets/src/lib/list-item/list-item.tsx");
/* harmony import */ var _list_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/list */ "../../../libs/feature-sets/src/lib/list/list.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sovtech-swapi/data-access */ "../../../libs/data-access/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet-icons */ "../../../node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
let _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/person/person.tsx",
    _ = t => t,
    _t;








/* eslint-disable-next-line */


const StyledPerson = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_t || (_t = _`
  color: #818181;
`));
const Person = props => {
  var _data$fetchPerson, _data$fetchPerson$peo;

  const {
    state,
    getPeopleState,
    setShowPerson
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_4__["PeopleContext"]);

  const compState = () => getPeopleState();

  const {
    show,
    person,
    characterSearch
  } = compState();
  const {
    data,
    loading,
    error
  } = Object(_sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_4__["useFetchPersonQuery"])({
    variables: {
      name: characterSearch
    }
  });
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
    children: "loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 23
  }, undefined);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
    children: "Error - please try again later"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 21
  }, undefined);
  console.log(data);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(StyledPerson, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      align: "left",
      pad: "small",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
        overflow: "hidden",
        background: "neutral-1",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Button"], {
          icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(grommet_icons__WEBPACK_IMPORTED_MODULE_6__["FormUp"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 19
          }, undefined),
          label: "Back",
          hoverIndicator: true,
          onClick: () => {
            setShowPerson(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), data == null ? void 0 : (_data$fetchPerson = data.fetchPerson) == null ? void 0 : (_data$fetchPerson$peo = _data$fetchPerson.people) == null ? void 0 : _data$fetchPerson$peo.map((person, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
        align: "center",
        pad: "large",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
          level: "3",
          children: [" ", person == null ? void 0 : person.name, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_list_list__WEBPACK_IMPORTED_MODULE_2__["List"], {
        pad: {
          horizontal: 'large'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_list_item_list_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          index: index,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Text"], {
            children: person == null ? void 0 : person.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
            children: person == null ? void 0 : person.gender
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (Person);

/***/ }),

/***/ "../../../libs/feature-sets/src/lib/starwars/starwars.tsx":
/*!**************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/starwars/starwars.tsx ***!
  \**************************************************************************************************/
/*! exports provided: Starwars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Starwars", function() { return Starwars; });
/* harmony import */ var _sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sovtech-swapi/data-access */ "../../../libs/data-access/src/index.ts");
/* harmony import */ var _person_person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../person/person */ "../../../libs/feature-sets/src/lib/person/person.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _people_grid_people_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../people-grid/people-grid */ "../../../libs/feature-sets/src/lib/people-grid/people-grid.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
let _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/starwars/starwars.tsx",
    _ = t => t,
    _t;






/* eslint-disable-next-line */


const StyledStarwars = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_t || (_t = _``));
function Starwars(props) {
  const {
    state,
    getPeopleState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_0__["PeopleContext"]);
  console.log(getPeopleState());
  console.log('STATE', state);

  const stateC = () => getPeopleState();

  const {
    show,
    person
  } = stateC();
  console.log('SHOW', {
    show,
    person
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    console.log('STARWARS RENDER');
  }, [state]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(StyledStarwars, {
    children: [!show && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_people_grid_people_grid__WEBPACK_IMPORTED_MODULE_4__["PeopleGrid"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }, this), show && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_person_person__WEBPACK_IMPORTED_MODULE_1__["Person"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 16
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (Starwars);

/***/ }),

/***/ "../../../libs/feature-sets/src/lib/sw-pagination/sw-pagination.tsx":
/*!************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/sw-pagination/sw-pagination.tsx ***!
  \************************************************************************************************************/
/*! exports provided: SwPagination, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwPagination", function() { return SwPagination; });
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet */ "../../../node_modules/grommet/es6/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons */ "../../../node_modules/grommet-icons/es6/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
let _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/sw-pagination/sw-pagination.tsx",
    _ = t => t,
    _t;




/* eslint-disable-next-line */


const StyledPagination = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_t || (_t = _``));
function SwPagination(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(StyledPagination, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
      fill: "vertical",
      overflow: "auto",
      align: "end",
      flex: "grow",
      direction: "column",
      justify: "start",
      responsive: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
        align: "center",
        justify: "center",
        direction: "row",
        pad: "small",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Button"], {
          onClick: () => props.updatePage('previous'),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["FormPrevious"], {
            size: "xlarge"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Box"], {
          align: "center",
          justify: "center",
          width: "xxsmall",
          overflow: "visible",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["TextInput"], {
            size: "large",
            plain: true,
            textAlign: "center",
            reverse: false,
            type: "text",
            name: "currentPage",
            value: props.value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_0__["Button"], {
          onClick: () => props.updatePage('next'),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(grommet_icons__WEBPACK_IMPORTED_MODULE_2__["FormNext"], {
            size: "xlarge"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
/* harmony default export */ __webpack_exports__["default"] = (SwPagination);

/***/ }),

/***/ "../../../node_modules/core-js/internals/a-possible-prototype.js":
/*!*********************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/a-possible-prototype.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/add-to-unscopables.js":
/*!*******************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/add-to-unscopables.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/an-object.js":
/*!**********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/an-object.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/array-includes.js":
/*!***************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/array-includes.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../../node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../../node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/classof-raw.js":
/*!************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/classof-raw.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!****************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../../../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/correct-prototype-getter.js":
/*!*************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-iterator-constructor.js":
/*!****************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "../../../node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!*******************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/create-property-descriptor.js":
/*!***************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/create-property-descriptor.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/define-iterator.js":
/*!****************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/define-iterator.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../../../node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../../node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../../../node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/descriptors.js":
/*!************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/descriptors.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/document-create-element.js":
/*!************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/document-create-element.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/dom-iterables.js":
/*!**************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/dom-iterables.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-user-agent.js":
/*!******************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/engine-user-agent.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../../../node_modules/core-js/internals/engine-v8-version.js":
/*!******************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/engine-v8-version.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "../../../node_modules/core-js/internals/enum-bug-keys.js":
/*!**************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/enum-bug-keys.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../../../node_modules/core-js/internals/export.js":
/*!*******************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/export.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../../node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/fails.js":
/*!******************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/fails.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/get-built-in.js":
/*!*************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/get-built-in.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/global.js":
/*!*******************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/global.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "../../../node_modules/core-js/internals/has.js":
/*!****************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/has.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/hidden-keys.js":
/*!************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/hidden-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/html.js":
/*!*****************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/html.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../../../node_modules/core-js/internals/ie8-dom-define.js":
/*!***************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/ie8-dom-define.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/indexed-object.js":
/*!***************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/indexed-object.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../../node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../../../node_modules/core-js/internals/inspect-source.js":
/*!***************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/inspect-source.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../../../node_modules/core-js/internals/internal-state.js":
/*!***************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/internal-state.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../../node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-forced.js":
/*!**********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/is-forced.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-object.js":
/*!**********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/is-object.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-pure.js":
/*!********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/is-pure.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../../../node_modules/core-js/internals/is-symbol.js":
/*!**********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/is-symbol.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../../node_modules/core-js/internals/use-symbol-as-uid.js");

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return typeof $Symbol == 'function' && Object(it) instanceof $Symbol;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators-core.js":
/*!***************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/iterators-core.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../../node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/iterators.js":
/*!**********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/iterators.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-symbol.js":
/*!**************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/native-symbol.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/native-weak-map.js":
/*!****************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/native-weak-map.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-assign.js":
/*!**************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-assign.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../node_modules/core-js/internals/indexed-object.js");

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-create.js":
/*!**************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../../../node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../../../node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../../node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-properties.js":
/*!*************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-define-properties.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../../node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-define-property.js":
/*!***********************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-define-property.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../../../node_modules/core-js/internals/to-property-key.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../../node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../../../node_modules/core-js/internals/to-property-key.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-names.js":
/*!******************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!********************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-get-prototype-of.js":
/*!************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../../node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../../node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../../../node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys-internal.js":
/*!*********************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-keys-internal.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../../../node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../../node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-keys.js":
/*!************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-keys.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../../node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!******************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../../../node_modules/core-js/internals/object-set-prototype-of.js":
/*!************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../../../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../../../node_modules/core-js/internals/ordinary-to-primitive.js":
/*!**********************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (pref !== 'string' && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/own-keys.js":
/*!*********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/own-keys.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../../node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/redefine.js":
/*!*********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/redefine.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/regexp-flags.js":
/*!*************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/regexp-flags.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/require-object-coercible.js":
/*!*************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/require-object-coercible.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-global.js":
/*!***********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/set-global.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");

module.exports = function (key, value) {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/set-to-string-tag.js":
/*!******************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/set-to-string-tag.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../../../node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-key.js":
/*!***********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/shared-key.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared-store.js":
/*!*************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/shared-store.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../../node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../../../node_modules/core-js/internals/shared.js":
/*!*******************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/shared.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../../../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.17.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-absolute-index.js":
/*!******************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/to-absolute-index.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-indexed-object.js":
/*!******************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/to-indexed-object.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-integer.js":
/*!***********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/to-integer.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-length.js":
/*!**********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/to-length.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../../../node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-object.js":
/*!**********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/to-object.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../../node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-primitive.js":
/*!*************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/to-primitive.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../../node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../../../node_modules/core-js/internals/is-symbol.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "../../../node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = input[TO_PRIMITIVE];
  var result;
  if (exoticToPrim !== undefined) {
    if (pref === undefined) pref = 'default';
    result = exoticToPrim.call(input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-property-key.js":
/*!****************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/to-property-key.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../../node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../../../node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : String(key);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/to-string.js":
/*!**********************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/to-string.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../../../node_modules/core-js/internals/is-symbol.js");

module.exports = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/uid.js":
/*!****************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/uid.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "../../../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!******************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../../../node_modules/core-js/internals/well-known-symbol.js":
/*!******************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/internals/well-known-symbol.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../../../node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "../../../node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../../node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.array.iterator.js":
/*!****************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/modules/es.array.iterator.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../../node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../../node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../../node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../../node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.object.assign.js":
/*!***************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/modules/es.object.assign.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../../node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "../../../node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "../../../node_modules/core-js/modules/es.regexp.to-string.js":
/*!******************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/modules/es.regexp.to-string.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "../../../node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../../node_modules/core-js/internals/an-object.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "../../../node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../../node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "../../../node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "../../../node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!***************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../../../node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "../../../node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../../node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../libs/data-access/src/lib/data-access.module.css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/home/cor/Projects/Collectif/sovtech-swapi/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!/home/cor/Projects/Collectif/sovtech-swapi/libs/data-access/src/lib/data-access.module.css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../node_modules/postcss-loader/dist/cjs.js?!../../../libs/feature-sets/src/lib/feature-sets.module.css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/cor/Projects/Collectif/sovtech-swapi/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/home/cor/Projects/Collectif/sovtech-swapi/node_modules/postcss-loader/dist/cjs.js??ref--5-oneOf-0-2!/home/cor/Projects/Collectif/sovtech-swapi/libs/feature-sets/src/lib/feature-sets.module.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "../../../node_modules/@apollo/client/index.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "../../../node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_theme_hpe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-theme-hpe */ "../../../node_modules/grommet-theme-hpe/dist/es6/index.js");
/* harmony import */ var _sovtech_swapi_feature_sets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sovtech-swapi/feature-sets */ "../../../libs/feature-sets/src/index.ts");
/* harmony import */ var _sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sovtech-swapi/data-access */ "../../../libs/data-access/src/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/apps/sovtech-swapi/src/app/app.tsx";







const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"](),
  uri: 'http://3.248.199.115:3333/graphql'
});
const App = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: client,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_2__["Grommet"], {
      theme: grommet_theme_hpe__WEBPACK_IMPORTED_MODULE_3__["hpe"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_sovtech_swapi_data_access__WEBPACK_IMPORTED_MODULE_5__["PeopleProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_sovtech_swapi_feature_sets__WEBPACK_IMPORTED_MODULE_4__["Heading"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_sovtech_swapi_feature_sets__WEBPACK_IMPORTED_MODULE_4__["Starwars"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/cor/Projects/Collectif/sovtech-swapi/apps/sovtech-swapi/src/main.tsx";




react_dom__WEBPACK_IMPORTED_MODULE_1__["render"]( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0__["StrictMode"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cor/Projects/Collectif/sovtech-swapi/apps/sovtech-swapi/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map