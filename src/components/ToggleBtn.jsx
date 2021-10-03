export const ToggleBtn = ({ passwordVisible, handler }) => {
  return (
    <button onClick={() => handler(!passwordVisible)}>
      {passwordVisible ? "hide" : "show"}
    </button>
  );
};
