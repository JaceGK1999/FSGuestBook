export function useAuth() {
  const context = useContext(authContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a ProvideAuth context');
  }

  return context;
}
