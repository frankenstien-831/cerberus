// DATA LOADING
export const LIST_REQUEST = 'LIST_REQUEST';
export const LIST_UPDATE = 'LIST_UPDATE';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_FAILURE = 'LIST_FAILURE';

export const DETAIL_REQUEST = 'DETAIL_REQUEST';
export const DETAIL_UPDATE = 'DETAIL_UPDATE';
export const DETAIL_SUCCESS = 'DETAIL_SUCCESS';
export const DETAIL_FAILURE = 'DETAIL_FAILURE';

// DATALOADER
export const UPLOAD_REQUEST = 'UPLOAD_REQUEST';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';

// AUTH
export const LOGIN_REQUEST = 'AUTH@@LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'AUTH@@LOGIN_SUCCESS';
export const LOGIN_FAILED = 'AUTH@@LOGIN_FAILED';

export const SIGNUP_REQUEST = 'AUTH@@SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'AUTH@@SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'AUTH@@SIGNUP_FAILED';

export const LOGOUT = '@@jwt/LOGOUT';

export const TOKEN_REQUEST = '@@jwt/TOKEN_REQUEST';
export const TOKEN_RECEIVED = '@@jwt/TOKEN_RECEIVED';
export const TOKEN_FAILURE = '@@jwt/TOKEN_FAILURE';

export const TOKEN_SAVE_SUCCESS = '@@jwt/TOKEN_SAVED';
export const TOKEN_SAVE_FAILURE = '@@jwt/TOKEN_NOT_SAVED';

// TRANSACTIONS
export const TRANSACTIONS_PREFIX = '@@TRANSACTIONS/';
export const TRANSACTION_CONFIRM_REQUEST = 'TRANSACITON_CONFIRM_REQUEST';
export const TRANSACTION_CONFIRM_SUCCESS = 'TRANSACITON_CONFIRM_SUCCESS';
export const TRANSACTION_CONFIRM_FAILURE = 'TRANSACITON_CONFIRM_FAILURE';

// ACCOUNTS
export const ACCOUNTS_PREFIX  = '@@ACCOUNTS/';

// USER
export const PROFILE_PREFIX = '@@USER/';
