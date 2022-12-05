import {Dimensions, Platform, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS} from '../constants';
const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  safeArea_: {
    flex: 1,
    backgroundColor: COLORS.whiteSmoke,
  },
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
  },
  statusBarSafeArea: {
    flex: 0,
    backgroundColor: COLORS.white,
  },
  splash_safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen_bg_white: {
    backgroundColor: COLORS.white,
  },
  splash_logo: {
    width: RFValue(250),
    height: RFValue(150),
    resizeMode: 'contain',
  },
  slideItemCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideImageViewCont: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(75),
  },
  slide_image: {
    width: RFValue(150),
    height: RFValue(150),
    justifyContent: 'center',
    backgroundColor: COLORS.transparent,
    resizeMode: 'contain',
  },
  slide_detail_cont: {
    alignItems: 'center',
  },
  slideTitle: {
    color: COLORS.primary,
    fontSize: RFValue(22),
    marginBottom: 10,
    marginTop: 25,
    textAlign: 'center',
    fontFamily: FONTS.regular,
  },
  slideSubTitle: {
    width: width * 0.9,
    color: COLORS.black,
    fontSize: RFValue(14),
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: FONTS.regular,
  },
  sliderDot: {
    height: RFValue(7),
    borderRadius: RFValue(7),
    backgroundColor: COLORS.primary,
    marginHorizontal: RFValue(2),
  },
  slidesFooter: {
    flexDirection: 'row',
    paddingHorizontal: RFValue(25),
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    top: Platform.OS === 'android' ? RFValue(-25) : RFValue(-20),
  },
  paginatorViewCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: Platform.OS === 'android' ? RFValue(-15) : RFValue(-12),
  },
  skipAll: {
    fontFamily: FONTS.regular,
    fontSize: RFValue(14),
    color: COLORS.black,
  },
  slideNext: {
    height: RFValue(18),
    width: RFValue(25),
    tintColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.black,
    fontSize: RFValue(18),
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: FONTS.regular,
  },
  headerBar: {
    flexDirection: 'row',
    padding: RFValue(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: FONTS.regular,
    backgroundColor: COLORS.white,
  },
  headerLeftButton: {
    marginRight: RFValue(5),
    marginLeft: RFValue(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRightButton: {
    marginRight: RFValue(5),
    marginLeft: RFValue(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000040',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  loaderIndicatorContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  loaderText: {
    color: '#000000',
    fontSize: 15,
    marginBottom: 10,
  },
  appButton: {
    backgroundColor: COLORS.black,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(5),
    flexDirection: 'row',
  },
  appText: {
    color: COLORS.white,
    fontSize: RFValue(14),
    textTransform: 'uppercase',
    fontWeight: '500',
    fontFamily: FONTS.regular,
  },
  errorTxt: {
    color: 'red',
    fontSize: RFValue(11),
    marginTop: RFValue(5),
  },
  login_main_cont: {
    alignItems: 'center',
  },
  logo_cont: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(25),
  },
  login_logo: {
    width: RFValue(120),
    height: RFValue(150),
    resizeMode: 'contain',
  },
  login_cont: {
    width: width * 0.8,
    justifyContent: 'center',
  },
  login_welcome_txt: {
    fontSize: RFValue(22),
    color: COLORS.black,
    fontWeight: 'bold',
    marginTop: RFValue(20),
  },
  login_desc_txt: {
    color: COLORS.gray,
    marginTop: RFValue(5),
  },
  login_input1_view: {
    marginTop: RFValue(20),
  },
  login_input2_view: {
    marginTop: RFValue(10),
  },
  login_input3_view: {
    marginTop: RFValue(10),
  },
  login_input_title: {
    color: COLORS.primary,
    fontWeight: 'bold',
    marginVertical: RFValue(3),
  },
  login_input_text: {
    borderBottomWidth: RFValue(1),
    borderBottomColor: COLORS.gray,
    backgroundColor: COLORS.white,
    paddingVertical: Platform.OS === 'ios' ? RFValue(10) : RFValue(5),
    paddingHorizontal: RFValue(2),
    color: COLORS.black,
    fontSize: RFValue(12),
  },
  login_submit_btn: {
    backgroundColor: COLORS.primary,
    marginTop: RFValue(50),
    padding: RFValue(10),
  },
  login_submit_btn_txt: {
    fontWeight: 'bold',
    textTransform: 'none',
  },
  drawerTopContentView: {
    flexDirection: 'row',
    height: 100,
    backgroundColor: COLORS.white,
    borderColor: COLORS.divider,
    alignItems: 'center',
    paddingHorizontal: RFValue(10),
  },
  drawerUserName: {
    width: RFValue(150),
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  userDashMainView: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    paddingHorizontal: RFValue(10),
  },
  userImage: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    borderWidth: 2,
    marginRight: 10,
    resizeMode: 'cover',
    borderColor: COLORS.primary,
  },
  studentImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    marginRight: 10,
    resizeMode: 'cover',
    borderColor: COLORS.primary,
  },
  userInitials: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    borderWidth: 2,
    marginRight: 10,
    justifyContent: 'center',
    borderColor: COLORS.primary,
  },
  stdInitials: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    marginRight: 10,
    justifyContent: 'center',
    borderColor: COLORS.primary,
  },
  userInitialsText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    fontSize: RFValue(24),
  },
  stdInitialsText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    fontSize: RFValue(18),
  },
  nameDash: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  homeStatViewCont: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: RFValue(20),
  },
  homeStatBox: {
    width: width * 0.45,
    alignItems: 'center',
  },
  dropDownStyle: {
    flexDirection: 'row',
    borderBottomWidth: RFValue(1),
    borderBottomColor: COLORS.gray,
    backgroundColor: COLORS.white,
    paddingVertical: RFValue(5),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropDownOptionCont: {
    maxHeight: RFValue(100),
    borderTopWidth: RFValue(1),
    borderTopColor: COLORS.gray,
    marginBottom: RFValue(5),
    marginTop: RFValue(1),
  },
  selectedItemText: {
    width: '90%',
    paddingHorizontal: RFValue(2),
    fontSize: RFValue(12),
    color: COLORS.black,
  },
  dropDownOptionText: {
    fontSize: RFValue(12),
    paddingVertical: RFValue(3),
    color: COLORS.black,
  },
  homeMainCont: {
    width: width,
    alignItems: 'center',
    paddingVertical: RFValue(10),
  },
  homeDashCardView: {
    backgroundColor: COLORS.white,
    marginVertical: RFValue(4),
    width: width * 0.9,
    borderLeftWidth: Platform.OS === 'ios' ? RFValue(4) : RFValue(5),
    borderLeftColor: COLORS.primary,
  },
  statItemView: {
    alignItems: 'center',
  },
  statItem: {
    height: RFValue(90),
    width: RFValue(90),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(90) / 2,
    borderWidth: RFValue(4),
    borderColor: COLORS.black,
  },
  statItemText: {
    fontWeight: 'bold',
    fontSize: RFValue(16),
    color: COLORS.black,
  },
  change_pwd_main_cont: {
    width: width,
    alignItems: 'center',
  },
  change_pwd_cont: {
    width: width * 0.8,
    justifyContent: 'center',
  },
  change_pwd_input_view_1: {
    marginTop: RFValue(50),
  },
  change_pwd_input_view_2: {
    marginTop: RFValue(15),
  },
  change_pwd_input_field: {
    borderBottomWidth: RFValue(1),
    borderBottomColor: COLORS.gray,
    backgroundColor: COLORS.white,
    paddingVertical: Platform.OS === 'ios' ? RFValue(10) : RFValue(5),
    paddingHorizontal: RFValue(2),
    color: COLORS.black,
    fontSize: RFValue(12),
  },
  change_pwd_submit_btn: {
    backgroundColor: COLORS.primary,
    marginTop: RFValue(35),
    padding: RFValue(10),
  },
  change_pwd_submit_btn_txt: {
    fontWeight: 'bold',
    textTransform: 'none',
  },
  announcement_main_cont: {
    width: width,
    alignItems: 'center',
  },
  announcement_list: {
    flexGrow: 0,
  },
  announcement_list_container: {
    paddingBottom: RFValue(175),
  },
  exam_list_container: {
    paddingBottom: RFValue(75),
  },
  attendanceListContentCont: {
    paddingBottom: RFValue(75),
  },
  announcement_list_item_card: {
    width: width * 0.95,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(10),
    marginVertical: RFValue(4),
    borderRadius: RFValue(3),
    backgroundColor: COLORS.white,
    borderLeftWidth: RFValue(5),
    borderLeftColor: COLORS.primary,
  },
  announcement_list_item_card_arrow: {
    width: 18,
    height: 18,
    tintColor: COLORS.black,
  },
  announcement_detail_card_view: {
    backgroundColor: COLORS.white,
    marginVertical: RFValue(10),
    width: width * 0.9,
    padding: RFValue(10),
  },
  announcement_detail_main_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  event_detail_title: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    marginVertical: RFValue(5),
    width: '85%',
  },
  event_detail_date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  event_detail_desc_title: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    marginTop: RFValue(5),
    paddingBottom: RFValue(5),
  },
  event_interested_btn: {
    position: 'absolute',
    right: 0,
    top: RFValue(5),
  },
  event_desc_divider: {
    height: 2,
    backgroundColor: COLORS.black,
  },
  noDataContainer: {
    width: width,
    height: height,
    alignItems: 'center',
  },
  noDataImg: {
    width: width / 2,
    height: width / 2,
    marginTop: width / 2,
  },
  noDataImg2: {
    width: width / 2,
    height: width / 2,
    marginTop: width / 3,
  },
  noDataImg4: {
    width: width / 2,
    height: width / 2,
    marginTop: width / 4,
  },
  noDataImg3: {
    width: width / 2,
    height: width / 2,
    marginTop: width / 24,
  },
  about_us_main_cont: {
    flex: 1,
    width: width,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  contact_card_cont: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: RFValue(5),
  },
  contact_card_title: {
    color: COLORS.black,
    fontWeight: '700',
  },
  contact_card_subTitle: {
    width: width * 0.8,
    color: COLORS.black,
    fontSize: RFValue(12),
  },
  about_us_text: {
    width: width * 0.9,
    paddingVertical: RFValue(10),
    color: COLORS.black,
    textAlign: 'justify',
  },
  divider: {
    height: RFValue(0.5),
    width: '90%',
    backgroundColor: COLORS.gray,
    marginHorizontal: RFValue(10),
  },
  divider_full: {
    height: RFValue(0.5),
    width: '100%',
    backgroundColor: COLORS.gray,
    marginVertical: RFValue(5),
  },
  timetable_main_cont: {
    width: width,
    alignItems: 'center',
  },
  timetable_list: {
    flexGrow: 0,
  },
  timetable_list_container: {
    paddingBottom: RFValue(50),
  },
  timetable_list_item_card: {
    width: width * 0.95,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(10),
    marginTop: RFValue(5),
    borderRadius: RFValue(3),
    backgroundColor: COLORS.white,
    borderLeftWidth: RFValue(5),
    borderLeftColor: COLORS.primary,
  },
  test_main_cont: {
    width: width,
    alignItems: 'center',
  },
  statHeaderView: {
    width: '100%',
    padding: RFValue(10),
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentUserView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: RFValue(10),
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  attendance_main_cont: {
    width: width,
    alignItems: 'center',
  },
  dates_cont: {
    width: width,
    padding: RFValue(10),
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  from_date_cont: {
    width: '48%',
    borderBottomWidth: RFValue(1),
  },
  to_date_cont: {
    width: '48%',
    borderBottomWidth: RFValue(1),
  },
  date_view_title: {
    color: COLORS.primary,
  },
  date_view_text: {
    marginTop: RFValue(3),
    padding: RFValue(2),
    color: COLORS.darkGrey,
  },
  test_list_item_card: {
    width: width * 0.95,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(10),
    marginTop: RFValue(5),
    borderRadius: RFValue(3),
    backgroundColor: COLORS.white,
    borderLeftWidth: RFValue(5),
    borderLeftColor: COLORS.primary,
  },
  test_list_item_card_arrow: {
    width: RFValue(16),
    height: RFValue(16),
    resizeMode: 'cover',
    tintColor: COLORS.black,
  },
  test_detail_list_item_card: {
    width: width * 0.95,
    marginVertical: RFValue(4),
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: RFValue(10),
    borderRadius: RFValue(3),
    backgroundColor: COLORS.white,
    borderLeftWidth: RFValue(5),
    borderLeftColor: COLORS.primary,
  },
  test_detail_list_item_row_1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  test_detail_list_item_row_1_col: {
    width: '20%',
    alignItems: 'center',
  },
  attendance_lectures_list_cont: {
    alignItems: 'center',
  },
  attendance_lectures_list_item: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(10),
    marginVertical: RFValue(2),
    borderRadius: RFValue(3),
    backgroundColor: COLORS.white,
    borderLeftWidth: RFValue(5),
    borderLeftColor: COLORS.darkGrey,
  },
  lecture_head_view: {
    width: width,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  lecture_head_text_view: {
    width: width * 0.9,
    marginTop: RFValue(10),
  },
  take_attendance_dashboard: {
    marginTop: RFValue(10),
  },
  subjectDropDownCont: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: RFValue(5),
  },
  subjectDropDownStyles: {
    width: width * 0.94,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  tExamDetailsCont: {
    width: width * 0.95,
    paddingHorizontal: RFValue(7),
    paddingTop: RFValue(3),
    paddingBottom: RFValue(10),
    marginTop: RFValue(5),
    backgroundColor: COLORS.white,
  },
  t_exam_detail_field_view: {
    marginTop: RFValue(5),
  },
  t_exam_detail_field_title: {
    color: COLORS.primary,
  },
  t_exam_detail_field_data: {
    width: '99%',
    borderBottomWidth: RFValue(1),
    borderBottomColor: COLORS.gray,
    paddingVertical: Platform.OS === 'ios' ? RFValue(5) : RFValue(2),
    paddingHorizontal: RFValue(2),
    color: COLORS.black,
    fontSize: RFValue(14),
  },
  t_exam_detail_field_student_input_data: {
    width: '50%',
    borderBottomWidth: RFValue(1),
    borderBottomColor: COLORS.gray,
    paddingVertical: Platform.OS === 'ios' ? RFValue(5) : RFValue(2),
    paddingHorizontal: RFValue(2),
    color: COLORS.black,
    fontSize: RFValue(14),
  },
  t_exam_detail_date_cont: {
    width: '99%',
    borderBottomWidth: RFValue(1),
    borderBottomColor: COLORS.gray,
    paddingVertical: Platform.OS === 'ios' ? RFValue(5) : RFValue(2),
  },
  tExamRadioBtn: {
    justifyContent: 'space-between',
    marginTop: RFValue(10),
  },
  tExamRadioBtnLabel: {
    fontSize: RFValue(12),
    color: COLORS.black,
    marginTop: RFValue(5),
  },
  tSAttendanceRadioBtn: {
    justifyContent: 'space-between',
    marginTop: RFValue(10),
    marginRight: RFValue(15),
  },
  tSAttendanceRadioBtnLabel: {
    fontSize: RFValue(11),
    color: COLORS.black,
    marginTop: RFValue(5),
  },
  t_exam_detail_student_list_card: {
    width: width * 0.95,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: RFValue(10),
    paddingBottom: RFValue(10),
    paddingHorizontal: RFValue(10),
    marginVertical: RFValue(5),
    borderRadius: RFValue(3),
    backgroundColor: COLORS.white,
    borderLeftWidth: RFValue(5),
    borderLeftColor: COLORS.primary,
  },
  checkBoxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  checkBoxTitle: {
    color: COLORS.primary,
    fontSize: RFValue(12),
  },
  subjectDropDownCont2: {
    width: '99%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginTop: RFValue(5),
  },
  subjectDropDownStyles2: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  createNotificationMainCont: {
    width: width,
    alignItems: 'center',
    marginTop: RFValue(5),
  },
  createNotificationCont: {
    width: width * 0.95,
    paddingHorizontal: RFValue(7),
    paddingTop: RFValue(3),
    paddingBottom: RFValue(10),
    backgroundColor: COLORS.white,
  },
  createNotificationInputField: {
    width: '99%',
    borderBottomWidth: RFValue(1),
    borderBottomColor: COLORS.gray,
    paddingVertical: Platform.OS === 'ios' ? RFValue(10) : RFValue(2),
    marginVertical: RFValue(5),
    paddingHorizontal: RFValue(2),
    color: COLORS.black,
    fontSize: RFValue(14),
  },
  createNotificationDescInputField: {
    width: '99%',
    borderBottomWidth: RFValue(1),
    borderBottomColor: COLORS.gray,
    paddingHorizontal: RFValue(2),
    color: COLORS.black,
    fontSize: RFValue(14),
  },
  notificationSendTypeCont: {
    width: '100%',
    flexDirection: 'row',
  },
  sendToMainCont: {
    marginTop: RFValue(10),
  },
  notificationlistContentContainer: {
    paddingBottom: RFValue(325),
  },
  notificationListContentContainer: {
    paddingBottom: RFValue(50),
  },
  selectAllView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: RFValue(1),
    borderTopColor: COLORS.gray,
    marginTop: RFValue(5),
    paddingTop: RFValue(10),
    paddingRight: RFValue(3),
  },
  attachmentModalView: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 15,
    paddingBottom: Platform.OS === 'ios' ? 50 : 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  attachLinkModalView: {
    width: '80%',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: RFValue(5),
  },
  attachmentModalTitle: {
    fontSize: RFValue(22),
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  attachLinkModalTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: COLORS.white,
    padding: RFValue(10),
    backgroundColor: COLORS.primary,
  },
  attachmentModalItemRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  attachmentModalItemRowText: {
    fontSize: RFValue(16),
    fontWeight: '500',
    color: COLORS.black,
    marginLeft: RFValue(5),
  },
  attachLinkSecCont: {
    width: '100%',
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addLinkInputField: {
    width: '100%',
    borderBottomWidth: RFValue(1),
    borderBottomColor: COLORS.gray,
    paddingVertical: Platform.OS === 'ios' ? RFValue(10) : RFValue(2),
    marginTop: RFValue(5),
    paddingHorizontal: RFValue(2),
    color: COLORS.black,
    fontSize: RFValue(14),
  },
  addLinkBtnRow: {
    flexDirection: 'row',
    marginTop: RFValue(10),
  },
  addLinkBtn: {
    width: '50%',
    backgroundColor: COLORS.primary,
    padding: RFValue(10),
    borderRadius: 0,
  },
  addLinkCancelBtn: {
    width: '50%',
    backgroundColor: COLORS.gray,
    padding: RFValue(10),
    borderRadius: 0,
  },
  addLinkBtnTxt: {
    fontWeight: 'bold',
    textTransform: 'none',
  },
  camera_btn_style: {
    position: 'absolute',
    bottom: RFValue(15),
  },
  camOnCase: {
    backgroundColor: COLORS.transparent,
    alignItems: 'center',
  },
  camNullCase: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.black,
  },
  takePicControlsViewCont: {
    width: width,
    position: 'absolute',
    bottom: RFValue(25),
    alignItems: 'center',
  },
  takePicControlsView: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  captureBtnMainCont: {
    position: 'absolute',
    bottom: RFValue(35),
    alignItems: 'center',
  },
  captureBtnCont: {
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
  },
  captureBtnView: {
    borderWidth: RFValue(5),
    borderColor: COLORS.white,
    backgroundColor: COLORS.transparent,
    borderRadius: RFValue(60),
    height: RFValue(60),
    width: RFValue(60),
    alignSelf: 'center',
  },
  backBtn: {
    position: 'absolute',
    top: RFValue(25),
    left: RFValue(20),
  },
  flashBtn: {
    position: 'absolute',
    top: RFValue(25),
    right: RFValue(20),
  },
  capturePrevImg: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

export default Styles;
