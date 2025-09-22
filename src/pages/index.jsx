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
    <div className="bg-gradient-to-t from-lightBlue to-darkBlue min-h-screen flex flex-col select-none">
      <Navbar />
      <div className='flex flex-1 flex-col items-center justify-center text-center space-y-6 p-4'>
        <img 
          src="/images/me.gif" 
          alt="Profile" 
          className="w-56 h-56 rounded-[20px] border-white shadow-2xl "
        />
        <h1 className="text-cuteBlue text-4xl font-bold font-poppins text-8xl animate-pulse transition-all duration-300 transform hover:scale-105">{t('title')}</h1>
        <p className="text-gray-300 font-poppins mt-4 text-xl max-w-3xl ">{t('description')}</p>
        <div className='flex flex-row mt-4 '>
          <div className='relative group'>
            <LinkedInIcon className='text-white hover:text-pink-500 cursor-pointer' style={{ fontSize: 40 }} onClick={() => window.open('https://www.linkedin.com/in/melikesenaçakır/', '_blank')} />
            {ShowTooltip('linkedin.com/in/melikesenaçakır')}
          </div>
          <div className='relative group'>
            <EmailIcon className='text-white hover:text-pink-500 cursor-pointer' style={{ fontSize: 40 }} onClick={() => window.open('mailto:melikesennaa@gmail.com', '_self')} />
            {ShowTooltip('mail')}
          </div>
          <div className='relative group'>
            <GitHubIcon className='text-white hover:text-pink-500 cursor-pointer ml-6' style={{ fontSize: 40 }} onClick={() => window.open('https://github.com/melikesenacakir', '_blank')} />
            {ShowTooltip('github.com/melikesenacakir')}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}