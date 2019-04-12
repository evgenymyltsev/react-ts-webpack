import React from 'react'
import { Store } from './Store';
import { IEpisodeProps } from './interfaces';
import { fetchDataAction, toggleFavAction } from './Actions';

export default function HomePage() {
    const { state, dispatch } = React.useContext(Store);
    const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch);
    });

    const props:IEpisodeProps = {
        toggleFavAction,
        store: { state, dispatch },
        episodes: state.episodes,
        favourites: state.favourites,
    };

    return (
        <React.Fragment>
            <React.Suspense fallback='loading...'>
                <section className='episode-layout'>
                    <EpisodesList {...props} />
                </section>
            </React.Suspense>
        </React.Fragment>
    )
}
