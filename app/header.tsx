interface HeaderProps {
     title: string;
}

export default function Header({title}: HeaderProps){
     return (
          <header className="p-3">
               <h1 className="text-4xl font-bold">{title}</h1>
          </header>
     )
}