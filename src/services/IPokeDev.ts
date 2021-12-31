export default interface IPokeDev {
    number: number,
    name: string,
    species: string,
    types: [
      string
    ],
    abilities: {
      normal: [
        string
      ],
      hidden: [
        string
      ]
    },
    eggGroups: [
      string,
      string
    ],
    gender: [
      number,
      number
    ],
    height: string,
    weight: string,
    family: {
      id: number,
      evolutionStage: number,
      evolutionLine: [
        string,
        string,
        string
      ]
    },
    starter: boolean,
    legendary: boolean,
    mythical: boolean,
    ultraBeast: boolean,
    mega: boolean,
    gen: number,
    sprite: string,
    description: string

}