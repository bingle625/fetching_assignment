module.exports = {
  SUCCESS: { isSuccess: true, code: 1000, message: "성공" },
  // Request ERROR
  FAILURE: { isSuccess: false, code: 2000, message: "실패" },

  SIGNUP_ID_EMPTY: { isSuccess: false, code: 2001, message: "id를 입력해주세요." },
  SIGNUP_PW_EMPTY: { isSuccess: false, code: 2002, message: "비밀번호를 입력해주세요." },
  SIGNUP_NAME_EMPTY: { isSuccess: false, code: 2003, message: "이름을 입력해주세요." },
  SIGNUP_ID_LENGTH: { isSuccess: false, code: 2004, message: "id를 30자 미만으로 입력해주세요." },
  SIGNUP_PW_LENGTH: { isSuccess: false, code: 2005, message: "비밀번호를 30자 미만으로 입력해주세요." },
  SIGNUP_NAME_LENGTH: { isSuccess: false, code: 2006, message: "이름은 30자 미만으로 입력해주세요." },
  SIGNIN_ID_EMPTY: { isSuccess: false, code: 2007, message: "id를 입력해주세요." },
  SIGNIN_PW_EMPTY: { isSuccess: false, code: 2008, message: "비밀번호를 입력해주세요." },
  SIGNIN_ID_LENGTH: { isSuccess: false, code: 209, message: "id를 30자 미만으로 입력해주세요." },
  SIGNIN_PW_LENGTH: { isSuccess: false, code: 2010, message: "비밀번호를 30자 미만으로 입력해주세요." },
  ITEM_NAME_EMPTY: { isSuccess: false, code: 2011, message: "상품의 이름을 입력해주세요." },
  ITEM_DESCRIPTION_EMPTY: { isSuccess: false, code: 2012, message: "상품의 상세설명을 입력해주세요." },
  ITEM_BRAND_EMPTY: { isSuccess: false, code: 2013, message: "상품의 브랜드를 입력해주세요." },
  ITEM_PRICE_EMPTY: { isSuccess: false, code: 2014, message: "상품의 가격을 입력해주세요." },
  ITEM_SIZE_EMPTY: { isSuccess: false, code: 2015, message: "상품의 사이즈를 입력해주세요." },
  ITEM_COLOR_EMPTY: { isSuccess: false, code: 2016, message: "상품의 색상을 입력해주세요." },
  ITEM_INDEX_EMPTY: { isSuccess: false, code: 2017, message: "상품의 인덱스를 입력해주세요." },

  // Response Error
  SIGNUP_REDUNDANT_ID: { isSuccess: false, code: 3000, message: "중복된 id입니다." },
  SIGNIN_ID_WRONG: { isSuccess: false, code: 3001, message: "틀린 id입니다." },
  SIGNIN_PW_WRONG: { isSuccess: false, code: 3002, message: "틀린 비밀번호입니다." },
  USER_STATUS_INACTIVE: { isSuccess: false, code: 3003, message: "비활성화된 user입니다." },
  USER_STATUS_DELETED: { isSuccess: false, code: 3004, message: "삭제된 user입니다." }
};
