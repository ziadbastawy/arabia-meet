<script setup>
import BaseText from "@/components/partials/BaseText/Index.vue";
const { registerUser } = useFirebaseAuth(); // auto-imported

const form = reactive({
  email: "ziad12@gmail.com",
  password: "12345678",
  confirmPassword: "",
});
const errorMsg = ref("");

function handleRegistration() {
  registerUser({
    email: form.email,
    password: form.password,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          errorMsg.value = "This E-mail already exist";
          break;
        default:
          errorMsg.value = "Invalid Email or password";
      }
    });
}

function submitData() {
  if (!form.email) {
    return (errorMsg.value = "Enter valid e-mail");
  } else if (!form.password) {
    return (errorMsg.value = "Enter valid password");
  } else if (!form.confirmPassword) {
    return (errorMsg.value = "Enter valid confirmation password");
  } else if (form.confirmPassword !== form.password) {
    return (errorMsg.value =
      "Confirmation password should be the same as password");
  }
  handleRegistration();
}
</script>


<template>
  <div
    class="
      login-form
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <div class="p-16">
      <div
        class="
          d-flex
          justify-content-center
          align-items-center
          flex-column
          p-12
        "
      >
        <h3 class="m-t-40">Welcome in Arabia-Meet 😄</h3>
        <p class="m-t-20">
          To contact with your friends, please sign-up using your email and
          password or google account
        </p>
      </div>
      <form class="p-20">
        <BaseText
          v-model="form.email"
          :placeholder="'Enter e-mail'"
          :label="'E-mail'"
        />
        <BaseText
          class="m-t-20"
          v-model="form.password"
          :placeholder="'Enter password'"
          :label="'Password'"
        />
        <BaseText
          class="m-t-20"
          v-model="form.confirmPassword"
          :placeholder="'enter password again'"
          :label="'Confirm Password'"
        />

        <p v-if="errorMsg" class="error-varient p-8">
          {{ errorMsg }}
        </p>
        <button type="button" class="btn-login-form m-t-20" @click="submitData">
          Sign-up
        </button>
      </form>
      <div class="m-y-28 seprator" />
      <button class="bg-white w-100 btn-google-login">
        Sign-up With Google
      </button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.login-form {
  height: 75%;
  .btn-login-form {
    background-color: $primary;
    color: $white;
    width: 100%;
    padding: 12px 20px;
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background-color: darken($primary, 10%);
    }
  }
  .btn-google-login {
    border: 1px solid $neutral-1;
    padding: 12px 20px;
    border-color: 1px solid rgb(215, 215, 215);
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: rgb(235, 235, 235);
    }
  }
}
</style>


