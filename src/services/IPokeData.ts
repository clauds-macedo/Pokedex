export default interface IPokeData {
  abilities: Array<{ ability: { name: string; url: string }, is_hidden: boolean, slot: number}>;
  base_experience: number;
  forms: Array<{ name: string; url: string }>;
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  past_types: [];
  species: {
    name: string;
    url: string;
  };

  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };

  stats: Array<{
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }>;

  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
}
