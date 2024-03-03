function handleSubmit() {
  //Lay gia tri cua input email va chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  //lay elemment cua the p hien thi loi
  const errorEmail = document.getElementById("error-email");

  //dieu kien de la mot email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //Dung match de kiem tra voi email vua nhap
  const checkEmail = emailValue.match(regex);
  //lay phan chua thong tin user
  const sectionContent = document.querySelector(".detail-info");
  console.log("check section", sectionContent);
  //Lay emlement de kiem soat submit
  const sumbmitControl = document.querySelector(".submitEmail");
  if (checkEmail) {
    sectionContent.style.display = "block";
    sumbmitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui long nhap dung dinh dang email";
  }
}

function handleOnMouseOver(element) {
  const viewmore = element.querySelector(".control-view");
  viewmore.style.display = "block";
}
function handleOnMouseOut(element) {
  const viewmore = element.querySelector(".control-view");
  if (!viewmore.classList.value.includes("less-more")) {
    viewmore.style.display = "none";
  }
}

function handleViewmore(element) {
  const parentElement = element.closest(".parent");
  const viewmore = parentElement.querySelector(".control-view");
  const careercontent = parentElement.querySelector(".section-content");
  if (viewmore.classList.value.includes("view-more")) {
    careercontent.style.display = "block";
    viewmore.classList.remove("view-more");
    viewmore.classList.add("less-more");
    viewmore.innerHTML = "Less more";
  } else {
    careercontent.style.display = "none";
    viewmore.classList.remove("less-more");
    viewmore.classList.add("view-more");
    viewmore.innerHTML = "View more";
  }
}
