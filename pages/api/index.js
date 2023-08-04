import {useState} from 'react';
import CodeWindow from '@/components/CodeWindow';

import background from '@/public/background.jpg';
import twitter_image from '@/public/twitter.png';
import Image from 'next/image';

export default fucntion Home(){
    const [loading, setLoading] = useState(false);
    const [inputCode, setInputCode] = useState(``);
    const [outputCode, setOutputCode] = useState('');
    const [inputLanguage, setInputLanguage] = useState('JavaScript');
    const [outputLanguage, setOutputLanguage] = useState('Python');

    const handleInputLanguageChange = (option) => {
        setInputLanguage(option.value)
        setInputCode('')
        setOutputCode('')
      }
    
    const handleOutputLanguageChange = (option) => {
        setOutputLanguage(option.value)
        setOutputCode('')
      }

    const handleTranslate = async () => {
        const maxCodeLength = 6000;
        if (inputLanguage === outputLanguage) {
            alert('Please select different languages.');
            return;
          }

        if (!inputCode) {
            alert('Please enter some code.');
            return;
          }

        if (inputCode.length > maxCodeLength) {
            alert(
              `Please enter code less than ${maxCodeLength} characters. You are currently at ${inputCode.length} characters.`,
            );
            return;
          }
        setLoading(true);
        setOutputCode('');

        
          
          
}