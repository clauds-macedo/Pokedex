export default interface IPokeData {

    abilities: [
        {
            ability: {
                name: string,
                url: string,
            },
            is_hidden: boolean,
            slot: number
        }
    ],

    base_experience: number,

    forms: [
        {
            name: string,
            url: string
        }
    ],

    game_indices: [
        {
            game_index: 154,
            version: {
                name: string,
                url: string
            }
        }
    ],

    height: number,
    held_items: [],
    id: number,
    is_default: boolean,
    location_area_encounters: string,

    moves: [
        {
            move: {
                name: string,
                url: string
            },
            version_group_details: [
                {
                    level_learned_at: number,
                    move_learn_method: {
                        name: string,
                        url: string
                    },
                    version_group: {
                        name: string,
                        url: string
                    }
                }
            ]
        }
    ],

    name: 'string',
    order: number,
    past_types: [],
    species: {
        name: string,
        url: string
    }

    sprites: {
        other: {
            official_artwork: {
                front_default: string
            }
        }
    }

    stats: [
        {
            base_stat: number,
            effort: number,
            stat: {
                name: string,
                url: string
            }
        }
    ],

    types: [
        {
            slot: number,
            type: {
                name: string,
                url: string
            }
        }
    ]

}