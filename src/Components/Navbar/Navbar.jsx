import React from 'react'
import ThemeContext from '../../Contexts/ThemeContext'
import ToggleTheme from '../ToggleTheme/ToggleTheme'
import { useTranslation } from 'react-i18next'
import LanguageButton from '../ToggleLanguage/LanguageButton';

export default function Navbar() {
  const {t}=useTranslation();
  return (
   <div className="w-[90%] rounded-lg mt-3 mx-auto navbar shadow-md  bg-white/30 backdrop-blur-md border border-white/20 px-4 transition-all duration-300">
  {/* Left Section - Logo / Title */}
  <div className="navbar-start">
    <button className="btn btn-primary btn-lg normal-case font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200">
      {t("logo")}
    </button>
  </div>

  {/* Center Section - Optional Navigation */}
  <div className="hidden lg:flex navbar-center gap-6">
    <a className="hover:text-primary font-medium cursor-pointer">{t("home")}</a>
    <a className="hover:text-primary font-medium cursor-pointer">{t("about")}</a>
    <a className="hover:text-primary font-medium cursor-pointer">{t("contact")}</a>
  </div>

  {/* Right Section - Theme + Language */}
  <div className="navbar-end gap-3">
    <ToggleTheme />
    <LanguageButton />
  </div>
</div>

  )
}
