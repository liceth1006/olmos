<template>
  <form class="form">

    <p class="heading">{{ $t("contact.messageContact") }}</p>
    <label for="name">{{ $t("contact.name") }}</label>
    <input class="input"  type="text" >
    <label for="email">{{ $t("contact.email") }}</label>
    <input class="input" type="text">
    <label for="message">{{ $t("contact.message") }}</label>
    <textarea class="input" type="text"> </textarea>
    <button class="btn">{{ $t("contact.submit") }} </button>
</form>
</template>
<style>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 2em;
  border-radius: 25px;
  transition: .4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
}

.form:hover {
  transform: translateX(-0.5em) translateY(-0.5em);
  border: 1px solid #171717;
  box-shadow: 10px 10px 0px #666666;
}

.heading {
  color: black;
  padding-bottom: 2em;
  text-align: center;
  font-weight: bold;
}

.input {
  border-radius: 5px;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  outline: none;
  padding: 0.7em;
  transition: .4s ease-in-out;
}

.input:hover {
  box-shadow: 6px 6px 0px #969696,
             -3px -3px 10px #ffffff;
}

.input:focus {
  background: #ffffff;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
}

.form .btn {
  margin-top: 2em;
  align-self: center;
  padding: 0.7em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 10px;
  border: none;
  color: black;
  transition: .4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
}

.form .btn:hover {
  box-shadow: 6px 6px 0px #969696,
             -3px -3px 10px #ffffff;
  transform: translateX(-0.5em) translateY(-0.5em);
}

.form .btn:active {
  transition: .2s;
  transform: translateX(0em) translateY(0em);
  box-shadow: none;
}
</style>