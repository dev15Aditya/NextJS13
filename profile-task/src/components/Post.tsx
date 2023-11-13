'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

// Sample data for the post
const samplePost = {
  title: 'The Changing World',
  content:
    'In the tapestry of time, our world has been woven with threads of evolution, progress, and transformation. From the dawn of humanity to the present moment, every heartbeat, every step, and every innovation has contributed to the continual metamorphosis of our planet. The world is not static; it is a dynamic entity, ever-changing and evolving. This essay explores the various facets of the changing world we live in.',

  activity: 'musing',
  author: 'anujgosalia',
  datePosted: 'October 27',
  minutesRead: 5,
  views: 100,
};

const PostCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="mx-3 lg:mx-16">
      {/* Card Header */}
      <CardActions disableSpacing>
        <Typography variant="h4" component="div" fontWeight="bold">
          {samplePost.title}
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          <IconButton aria-label="like" style={{ backgroundColor: '#edcc38' }}>
            <ThumbUpOffAltIcon />
          </IconButton>
        </div>
      </CardActions>

      {/* Post Content */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {expanded
            ? samplePost.content
            : `${samplePost.content.substring(0, 200)}...`}
          {!expanded && (
            <span
              style={{ cursor: 'pointer', color: 'blue' }}
              onClick={handleExpandClick}
            >
              {' '}
              Read more
            </span>
          )}
        </Typography>
      </CardContent>

      {/* Post Footer */}
      <CardActions disableSpacing>
        <Typography variant="subtitle2">
          <span className="text-blue-400">{samplePost.activity}</span> by{' '}
          {samplePost.author}
        </Typography>
        <div style={{ marginLeft: 'auto', color: 'gray' }}>
          <Typography variant="caption">{samplePost.datePosted}</Typography>
          <Typography variant="caption" style={{ margin: '0 8px' }}>
            {samplePost.minutesRead} mins Read
          </Typography>
          <Typography variant="caption">{samplePost.views} Views</Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default PostCard;
