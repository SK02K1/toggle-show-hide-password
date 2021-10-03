export const Input = ({ passwordVisible }) => {
  return (
    <input
      type={passwordVisible ? "text" : "password"}
      placeholder="Enter your password"
    />
  );
};
