import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import kishan from "../../assets/kishan.jpeg";
function Footer() {
  return (
    <footer class="  pb-24 bg-white text-black">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <div class="flex items-center">
              <img
                src={kishan}
                class="h-8 w-8 rounded-full me-3"
                alt="FlowBite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap ">
                Kishan Rana Ghosh
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Contacts
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://flowbite.com/"
                    class="hover:underline flex  items-center gap-3"
                  >
                    LinkedIn <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    class="hover:underline flex  items-center gap-3"
                  >
                    Github <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" class="hover:underline">
              kishanranaghosh
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
