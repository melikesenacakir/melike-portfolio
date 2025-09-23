import { useTranslation } from 'react-i18next';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Footer } from '../components/footer/footer';
import { ShowTooltip } from '../utils/tooltip';
import { Navbar } from "../components/navbar/navbar";

export const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-t from-lightBlue to-darkBlue min-h-screen w-full flex flex-col select-none overflow-x-hidden">
      <Navbar />
      <div className='flex flex-1 flex-col items-center justify-center text-center space-y-4 sm:space-y-6 p-4 w-full max-w-full'>
        <img 
          src="/images/me.gif" 
          alt="Profile" 
          className="w-[30vw] h-[30vw] max-w-56 max-h-56 rounded-[20px] border-white shadow-2xl"
        />
        <h1 className="text-cuteBlue text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-poppins animate-pulse transition-all duration-300 transform hover:scale-105 px-2 w-full">{t('title')}</h1>
        <p className="text-gray-300 font-poppins mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl px-4 w-full">{t('description')}</p>
        <div className='flex flex-row mt-4 -space-x-6 sm:-space-x-12 justify-center w-full'>
          <div className='relative group'>
            <LinkedInIcon className='text-white hover:text-pink-500 cursor-pointer' style={{ fontSize: 40 }} onClick={() => window.open('https://www.linkedin.com/in/melikesenaçakır/', '_blank')} />
            {ShowTooltip('linkedin.com/in/melikesenaçakır')}
          </div>
          <div className='relative group'>
            <EmailIcon className='text-white hover:text-pink-500 cursor-pointer' style={{ fontSize: 40 }} onClick={() => window.open('mailto:melikesennaa@gmail.com', '_self')} />
            {ShowTooltip('mail')}
          </div>
          <div className='relative group'>
            <GitHubIcon className='text-white hover:text-pink-500 cursor-pointer' style={{ fontSize: 40 }} onClick={() => window.open('https://github.com/melikesenacakir', '_blank')} />
            {ShowTooltip('github.com/melikesenacakir')}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}