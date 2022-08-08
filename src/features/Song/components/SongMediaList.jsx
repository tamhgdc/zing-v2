import { Col, Row, Skeleton, Space } from 'antd';
import clsx from 'clsx';
import { Fragment } from 'react';
import SongMediaItem from './SongMediaItem';
import SongMediaSkeletonList from './SongMediaSkeletonList';

/**
 * @typedef {import('@/types').Song} Song
 */

/***
 * @param {{
 *  type?: 'card' | 'list';
 *  songList?: Song[];
 *  className?: string;
 *  durationInvisible?: boolean;
 *  loading?: boolean
 * }} _props
 */
export default function SongMediaList({
  songList = [],
  type = 'list',
  className,
  loading = false,
  // durationInvisible = false,
}) {
  /** @type {'card-item' | 'list-item'} */
  const itemType = `${type}-item`;

  return (
    <div className={clsx(className, type === 'card' ? 'media-card-list' : 'song-play-list')}>
      {loading ? (
        <SongMediaSkeletonList type={type} />
      ) : (
        songList.map((song, index) => (
          // <Col xs={12} sm={8} md={6} >
          <SongMediaItem key={index} type={itemType} song={song} />
          // </Col>
        ))
      )}
    </div>
  );
}
