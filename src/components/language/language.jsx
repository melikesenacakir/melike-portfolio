import { useTranslation } from "react-i18next";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleChange = ( _ , language ) => {
     i18n.changeLanguage(language);
  };

  return (
    <div className="flex gap-2 items-center">
      <ToggleButtonGroup
        color="primary"
        value={currentLang}
        exclusive
        onChange={handleChange}
        aria-label="Language"
        >
        <ToggleButton value="tr" sx={{color: 'white'}}>TR</ToggleButton> {/*if i want to change the color of the text i have to define it with sx={{}} (materialui)*/}
        <ToggleButton value="en" sx={{color: 'white'}}>EN</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
};

