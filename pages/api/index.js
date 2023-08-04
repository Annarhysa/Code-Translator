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
    
  
}