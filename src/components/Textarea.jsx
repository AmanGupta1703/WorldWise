import { useId } from "react";

const Textarea = ({ name, label = "", className = "", ...props }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="flex flex-col gap-2">
        {label && <span className="text-white text-base font-bold">{label}</span>}

        <textarea
          name={name}
          id={id}
          autoCorrect="on"
          spellCheck="true"
          className={`resize-none bg-zinc-300  w-full rounded-[5px] outline-none focus:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-zinc-600 ${className}`}
          {...props}></textarea>
      </label>
    </div>
  );
};

export default Textarea;
