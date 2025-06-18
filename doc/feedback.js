export function createFeedbackSection() {
  const section = document.createElement("section");
  section.id = "feedback";

  const feedback = document.createElement("div");
  feedback.className = "feedback";

  const container = document.createElement("div");
  container.className = "container";

  const h2 = document.createElement("h2");
  h2.textContent = "Say hello";

  const p = document.createElement("p");
  p.textContent = "Lorem ipsum dolor sit amet.";

  const form = document.createElement("form");

  const inlineDiv = document.createElement("div");
  inlineDiv.className = "inline";

  const firstNameDiv = document.createElement("div");
  const firstNameLabel = document.createElement("label");
  firstNameLabel.textContent = "First Name";
  const firstNameInput = document.createElement("input");
  firstNameInput.type = "text";
  firstNameDiv.appendChild(firstNameLabel);
  firstNameDiv.appendChild(firstNameInput);

  const lastNameDiv = document.createElement("div");
  const lastNameLabel = document.createElement("label");
  lastNameLabel.textContent = "Last Name";
  const lastNameInput = document.createElement("input");
  lastNameInput.type = "text";
  lastNameDiv.appendChild(lastNameLabel);
  lastNameDiv.appendChild(lastNameInput);

  inlineDiv.appendChild(firstNameDiv);
  inlineDiv.appendChild(lastNameDiv);

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email Address";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.className = "one-line";

  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Massage";
  const messageTextarea = document.createElement("textarea");
  messageTextarea.className = "one-line";

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Get in touch";

  // Складаємо форму
  form.appendChild(inlineDiv);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageTextarea);
  form.appendChild(button);

  // Складаємо все в container
  container.appendChild(h2);
  container.appendChild(p);
  container.appendChild(form);

  feedback.appendChild(container);
  section.appendChild(feedback);

  // Додаємо до DOM
  const main = document.querySelector("main") || document.body;
  main.appendChild(section);
}
