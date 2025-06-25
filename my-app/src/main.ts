const up = document.querySelector("#up"),
  inn = document.querySelector("#in"),
  scroll = document.querySelector("#scroll");

up?.addEventListener("click", () => {
  
  if (scroll) {
    scroll.className = "w-[50vw] h-[100vh]";
    scroll.innerHTML = `<div class=" grid grid-cols-1 place-items-center " >
        <h2 class="text-[#fff] max-sm:text-[5vh] text-[7vh]  text-center my-[10vh]">Welcome</h2>
        <div class="grid sm:grid-cols-1  place-items-center gap-[10px]">
          <input placeholder="Enter your name" type="text" id="name" class="bg-amber-50 rounded-xl">
          <div id="nameError"></div>
          <input placeholder="Enter your surname" type="text" id="surname" class="bg-amber-50 rounded-xl">
          <div id="surnameError"></div>
          <input placeholder="Enter your email" type="email" id="email" class="bg-amber-50 rounded-xl">
          <div id="emailError"></div>
          <input placeholder="Enter your number" type="number" id="number" class="bg-amber-50 rounded-xl">
          <div id="numberError"></div>
          <input placeholder="Enter your password" type="password" id="pass1" class="bg-amber-50 rounded-xl">
          <div id="passwordError"></div>
          <input placeholder="Enter your password again" type="password" id="pass2" class="bg-amber-50 rounded-xl">
          <div id="password2Error"></div>
          <button id="2signup" type="" class="text-[white] border-[white] border-[1px] rounded-xl p-[1vh] my-[10vh]">Sign Up</button>
        </div>
      </div>`;
    scroll.scrollIntoView({
      behavior: "smooth",
    });
  }
});

inn?.addEventListener("click", () => {
  if (scroll) {
    scroll.className = "w-[50vw] h-[100vh]";
    scroll.innerHTML = `<div class=" grid grid-cols-1 place-items-center " >
        <h2 class="text-[white] max-sm:text-[5vh] text-[7vh]  text-center my-[10vh]">Welcome back</h2>
        <div class="grid sm:grid-cols-1  place-items-center gap-[1vh]">
          <input placeholder="Enter your email" type="email" name="signin" required id="email" class="bg-amber-50 rounded-xl">
          <div id="emailError"></div>
          <input placeholder="Enter your password" type="password" required name="signin" id="pass1" class="bg-amber-50 rounded-xl">
          <div id="passwordError"></div>
        </div>
        <button id="2signin" type="submit" class="text-[white] border-[white] border-[1px] rounded-xl p-[1vh] my-[10vh]">Sign In</button>
    </div>`;
    scroll.scrollIntoView({
      behavior: "smooth",
    });
  }
});

const name: any = document.querySelector("#name");

if(name.value == ""){
  const nameError:any = document.querySelector("#nameError");
  nameError.textContent = "Name is required";
}
