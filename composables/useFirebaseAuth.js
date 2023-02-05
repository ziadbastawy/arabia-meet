import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function () {
    const { $auth } = useNuxtApp()

    // const user = reactive({})

    const registerUser = async ({ email, password }) => {
        return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword($auth, email, password).then(res => {
                resolve(res.user)
            }).catch((error) => {
                reject({ ...error })
            })
        })
    }

    return {
        registerUser
    }
}
