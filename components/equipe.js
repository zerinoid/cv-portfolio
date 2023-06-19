import Masonry from 'react-masonry-css';
import styles from './equipe.module.scss';

export default function Equipe() {
  let items = [
    {
      id: 1,
      name: 'João Pereira',
      age: '30',
      depoimento: 'Nullam eu ante vel est convallis dignissim.',
      padding: 140
    },
    {
      id: 2,
      name: 'Diogo Fraga',
      age: '30',
      depoimento: 'Donec at pede.  ',
      padding: 245
    },
    {
      id: 3,
      name: 'Bia Ferreira',
      age: '28',
      depoimento: 'Nam vestibulum accumsan nisl.  ',
      padding: 140
    },
    {
      id: 4,
      name: 'Michael Bravo',
      age: '34',
      depoimento: 'Etiam vel tortor sodales tellus ultricies commodo.  ',
      padding: 235
    },
    {
      id: 5,
      name: 'Bianca Silva',
      age: '33',
      depoimento: 'Nullam tristique diam non turpis.  ',
      padding: 140
    },
    {
      id: 6,
      name: 'Augusto Costa',
      age: '24',
      depoimento: 'Nam a sapien.  ',
      padding: 240
    },
    {
      id: 7,
      name: 'Marco Dias',
      age: '41',
      depoimento: 'Aliquam posuere.  ',
      padding: 240
    },
    {
      id: 8,
      name: 'Miguel Silva',
      age: '32',
      depoimento: 'Nullam tristique diam non turpis.  ',
      padding: 220
    },
    {
      id: 9,
      name: 'Carlos Gomes',
      age: '46',
      depoimento: 'Aenean in sem ac leo mollis blandit.  ',
      padding: 140
    },
    {
      id: 10,
      name: 'Cristiano Souza',
      age: '21',
      depoimento: 'Cras placerat accumsan nulla.  ',
      padding: 140
    },
    {
      id: 11,
      name: 'Bruno Lima',
      age: '36',
      depoimento: 'Mauris ac felis vel velit tristique imperdiet.  ',
      padding: 30
    }
  ];

  items = items.map(item => {
    return (
      <div key={item.id} style={{ paddingTop: item.padding }}>
        <h6 className="mb-1">{item.name}</h6>
        <p
          className={styles.titulo}
          dangerouslySetInnerHTML={{ __html: item.depoimento }}
        />
      </div>
    );
  });

  return (
    <div className="max-width pad-mobile">
      <h4 className={`${styles.roxo} text-center mb-4`}>Relatos</h4>
      <Masonry
        breakpointCols={{ default: 4, 992: 3, 768: 2, 576: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {items}
      </Masonry>
    </div>
  );
}
