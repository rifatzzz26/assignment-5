import { helplineData } from "./utils.js";

// createCardElements() && appendCardElements()
(() => {
  helplineData.forEach((cardData) => {
    const cardHTML = `
        <div class="p-8 bg-white shadow-sm rounded-xl flex flex-col gap-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-center p-3.5 rounded-2xl
                ${
                  cardData.description === "Police"
                    ? "bg-[#DFEFFF]"
                    : "bg-[#FFE3E2]"
                }">
                    <img class="size-8 " src=${cardData.image}
                      alt=${cardData.description}
                    />
                </div>
                <i class="heart-icon-element fa-regular fa-heart text-2xl transition-all duration-200 ease-out hover:scale-110"></i>
            </div>
            <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-0.5">
                    <h2 class="font-madurai font-bold text-2xl leading-8 truncate">${
                      cardData.service
                    }</h2>
                    <p class="font-roboto text-lg text-subtitle truncate">${
                      cardData.description
                    }</p>
                </div>
                <div class="flex flex-col gap-0.5 items-start">
                    <h2 class="font-roboto font-bold text-[2rem] w-full overflow-hidden text-ellipsis">${
                      cardData.number
                    }</h2>
                    <p class="px-4 py-1.5 bg-tag-bg rounded-full">${
                      cardData.category
                    }</p>
                </div>
                <div class="grid grid-cols-2 gap-2 *:rounded-lg *:py-2.5 *:font-roboto *:text-base">
                    <button class="copy-btn-element border border-call-btn text-subtitle transition-all ease-out duration-200 hover:text-black hover:border-black"><i class="fa-regular fa-copy"></i>
                        Copy</button>
                    <button class="call-button-element bg-primary border-0 text-white transitoin-all ease-out duration-150 hover:bg-primary/50"><i class="fa-solid fa-phone"></i>
                        Call</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById("card-container").innerHTML += cardHTML;
  });
})();

// grabbing elements
const heartIconElements = document.querySelectorAll(".heart-icon-element");
const heartCountElement = document.querySelector("#heart-count-element");
const coinCountElement = document.querySelector("#coin-count-element");
const callButtonElements = document.querySelectorAll(".call-button-element");
const copyButtonElements = document.querySelectorAll(".copy-btn-element");
const copyCountElement = document.querySelector("#copy-count-element");
const callHistoryContainerElement = document.querySelector(
  "#call-history-container-element"
);
const callHistoryClearButton = document.querySelector(
  "#call-history-clear-button"
);

// declaring variables
const defaultCoinValue = 100;
const perCallCost = 20;
let heartCountNumber = 0;
let currentCoinCountNumber = defaultCoinValue;
let currentCopyCount = 0;
let callHistoryCount = 0;

// helper functions
const manageCallHistoryButton = (count) => {
  if (count === 0) {
    callHistoryClearButton.classList.add("hidden");
  } else {
    callHistoryClearButton.classList.remove("hidden");
  }
};

// injecting default vlaues and styles
(() => {
  heartCountElement.innerText = heartCountNumber;
  coinCountElement.innerText = currentCoinCountNumber;
  copyCountElement.innerText = currentCopyCount;
  manageCallHistoryButton(callHistoryCount);
})();

// all the main logic starts below:
heartIconElements.forEach((element) => {
  element.addEventListener("click", () => {
    heartCountNumber += 1;
    heartCountElement.innerText = heartCountNumber;
  });
});

callButtonElements.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (currentCoinCountNumber < 20) {
      alert(
        `❌ You dont have enough balance.\n❌ You'll need at least ${perCallCost} coins`
      );
      return;
    }

    // accessing the data which i am gonna need to alert
    const currentCardObj = helplineData[index];

    // doing the actual stuff which this function was supposed to do.
    alert(`Calling ${currentCardObj.service} ${currentCardObj.number}`);

    // calculate
    currentCoinCountNumber -= perCallCost;

    // ui updation
    coinCountElement.innerText = currentCoinCountNumber;
    callHistoryContainerElement.innerHTML += `
      <div class="p-4 flex justify-between items-center gap-4 rounded-lg bg-history-card-bg">
          <div class="flex flex-col gap-1">
              <h4 class="font-inter font-semibold text-lg">${
                currentCardObj.service
              }</h4>
              <p class="font-madurai text-subtitle">${currentCardObj.number}</p>
          </div>
          <p class="font-madurai text-lg">${new Date().toLocaleTimeString()}</p>
      </div>
  `;

    callHistoryCount += 1;
    manageCallHistoryButton(callHistoryCount);
  });
});

copyButtonElements.forEach((element, index) => {
  // accessing the data which i am gonna need to alert
  const currentCardObj = helplineData[index];

  // adding event listeners
  element.addEventListener("click", () => {
    navigator.clipboard
      .writeText(currentCardObj.number)
      .then(() => {
        alert("Text copied: " + currentCardObj.number);
        currentCopyCount += 1;
        copyCountElement.innerText = currentCopyCount;
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  });
});

callHistoryClearButton.addEventListener("click", () => {
  callHistoryContainerElement.innerHTML = ``;
  callHistoryCount = 0;
  manageCallHistoryButton(callHistoryCount);
});
