module.exports = {
  SUCCESS: { isSuccess: true, code: 1000, message: "성공" },
  // Request ERROR
  FAILURE: { isSuccess: false, code: 2000, message: "실패" },

  SIGNUP_ID_EMPTY: { isSuccess: false, code: 2001, message: "id를 입력해주세요." },
  SIGNUP_PW_EMPTY: { isSuccess: false, code: 2002, message: "비밀번호를 입력해주세요." },
  SIGNUP_NAME_EMPTY: { isSuccess: false, code: 2003, message: "이름을 입력해주세요." },
  SIGNUP_ID_LENGTH: { isSuccess: false, code: 2004, message: "id를 30자 미만으로 입력해주세요." },
  SIGNUP_PW_LENGTH: { isSuccess: false, code: 2005, message: "비밀번호를 30자 미만으로 입력해주세요." },
  SIGNUP_NAME_LENGTH: { isSuccess: false, code: 2006, message: "이름은 30자 미만으로 입력해주세요." }
};
