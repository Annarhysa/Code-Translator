// Import the `languages` object from the `@/constants/languages` module.
import { languages } from '../constants/languages';
import Select from 'react-select';

const LanguageSelect = ({ language, handleLanguageChange, disabled }) => {
    const formatOptionLabel = ({ _, label }) => (
        // Return a React component that displays the `label` value as a paragraph with a "Select" indicator if the `language` prop matches the `label`.
        <div className='flex flex-row justify-between items-center'><p>{label}</p>{language===label && <p className='text-xs text-slate-400'>Select</p>}</div>
    );
    return (
        <Select
            className="w-full rounded-t-lg border-2 border-black"
            value={{label: language, value: language}}
            onChange={handleLanguageChange}
            isDisabled={disabled}
            options={languages.sort((a, b) => a.label.localeCompare(b.label))}
            formatOptionLabel={formatOptionLabel}
        >
        </Select>
    );
};

export default LanguageSelect;
