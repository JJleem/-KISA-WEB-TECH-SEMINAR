type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  return (
    <>
      <header className="py-4 border-b">Menu</header>
      <div className="flex-1"> {children}</div>
      <footer className="py-4 border-t">Footer</footer>
    </>
  );
}
