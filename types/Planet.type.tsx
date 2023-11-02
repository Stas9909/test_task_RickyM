interface Location {
    id: number
    name: string
    type: string
    dimension: string
    orig: LocationOrig
    location: LocationLocation 
    residents: string[]
    url: string
    created: string
}

interface LocationLocation {
    name: string
    url: string
}
interface LocationOrig {
    name: string
    url: string
}