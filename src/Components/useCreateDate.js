const useCreateDate = () => {
  const dateObj = new Date();
  let month = dateObj.getMonth();
  let monthNmae;
  switch (month) {
    case 0:
      monthNmae = "Jan";
      break;
    case 1:
      monthNmae = "Feb";
      break;
    case 2:
      monthNmae = "Mar";
      break;
    case 3:
      monthNmae = "APr";
      break;
    case 4:
      monthNmae = "May";
      break;
    case 5:
      monthNmae = "Jun";
      break;
    case 6:
      monthNmae = "Jul";
      break;
    case 7:
      monthNmae = "Aug";
      break;
    case 8:
      monthNmae = "Sep";
      break;
    case 9:
      monthNmae = "Oct";
      break;
    case 10:
      monthNmae = "NOv";
      break;
    case 11:
      monthNmae = "Dec";
      break;
    default:
      monthNmae = "";
  }

  const date = `${monthNmae} ${dateObj.getDate()}, ${dateObj.getFullYear()} [${dateObj.getHours()}:${dateObj.getMinutes()}]`;
  return date;
};

export default useCreateDate;
