import Link from "next/link";

function LogIn() {
  return (
    <section>
      <div class="h-screen md:flex">
        <div class="flex  md:w-1/2 justify-center pt-40 md:py-10 items-center bg-white">
          <form class="bg-white">
            <h1 class="text-gray-800 font-bold text-2xl mb-1">
              Iniciar sesión
            </h1>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Usuario"
              />
            </div>

            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="pl-2 outline-none border-none"
                type="text"
                name=""
                id=""
                placeholder="Contraseña"
              />
            </div>
            <button
              type="submit"
              class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <div className=" flex justify-center">
              <Link
                href="/dasboard"
                class="text-sm ml-2  text-gray-400  hover:text-blue-500 cursor-pointer"
              >
                ir a DashBoard
              </Link>
            </div>
            <div className="py-10">
              <div className=" flex justify-center  py-1">
                <span class="text-sm ml-2  text-gray-400  hover:text-blue-500 cursor-pointer">
                  Olvidaste la contraseña?
                </span>
              </div>
              <div className=" flex justify-center py-1">
                <span class="text-sm ml-2  text-gray-400  hover:text-blue-500 cursor-pointer">
                  Crear usuario nuevo
                </span>
              </div>
            </div>
          </form>
        </div>
        <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-center items-center hidden">
          <div>
            <img src="/img/promo2.jpg" class="" alt="promo1" />
          </div>

          <div>
            <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LogIn;
