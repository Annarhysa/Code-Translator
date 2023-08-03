import CodeEditor from "./CodeEditor";
import LanguageSelect from "./LanguageSelect";

const CodeWindow = ({code, setCode, loading, handleLanguageChange, language}) => {
    return (
        <div className="mx-20 my-5 w-2/5 ">
            <LanguageSelect handleLanguageChange={handleLanguageChange} language={language} disabled={loading} />
            <CodeEditor code={code} setCode={setCode} editable={!loading} />
        </div>
    );
};

export default CodeWindow;