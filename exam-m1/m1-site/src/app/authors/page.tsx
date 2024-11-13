import Breadcrumb from '../../components/Breadcrumb';

export default function Authors() {
  return (
    <div>
      <Breadcrumb paths={[{ label: 'Accueil', href: '/' }, { label: 'Auteurs', href: '/authors' }]} />
      <h1 className="text-3xl font-bold mb-4">Liste des Auteurs</h1>
      <p className="text-gray-700">Affichez et gérez vos auteurs ici.</p>
    </div>
  );
}
