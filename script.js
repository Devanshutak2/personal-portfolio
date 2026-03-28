const text = ["Software Developer", "AI/ML Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];

  document.getElementById("typing").innerText = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
    setTimeout(type, 1000);
  }
}

type();
