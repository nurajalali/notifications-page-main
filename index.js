let read = 7;
document.getElementById("reads").innerText = read;

const elements = Array.from(document.getElementsByClassName("notif"));

elements.forEach((e) =>
  e.addEventListener(
    "click",
    (event) => {
      read -= 1;
      document.getElementById("reads").innerText = read;
      event.currentTarget.classList.remove("unread");
    },
    { once: true }
  )
);

document.getElementById("read-all").addEventListener("click", () => {
  elements.forEach((e) => e.dispatchEvent(new Event("click")));
});
