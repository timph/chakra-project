import { pokemonUri } from "../../../constants";
import { useEffect, useMemo, useState } from "react"

export const usePokemonPage = (limit: number) => {
  const [data, setData] = useState([])

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      if (!mounted) return;
      try {
        const res = await fetch(`${pokemonUri}?limit=${limit}`)
        if (!res.ok) {
          console.log("Error retrieving data")
          return;
        }
        const data = await res.json();
        setData(data);
      } catch (e) {
        console.error("Network error")
      }
    }

    fetchData();
    return () => { mounted = false };
  },[])

  const pokemons = useMemo(() => {
    if (data) {
      return data.results;
    }
    return []
  }, [data]);
  
  return { pokemons }
}