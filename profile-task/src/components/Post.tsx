'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const PostCard = (props: {
  id: number;
  title: string;
  content: string;
  activity: string;
  author: string;
  datePosted: string;
  minutesRead: number;
  views: number;
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card key={props.id} className="mx-3 lg:mx-16 mb-2">
      {/* Card Header */}
      <CardActions disableSpacing>
        <Typography variant="h4" component="div" fontWeight="bold">
          {props.title}
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
          {expanded ? props.content : `${props.content.substring(0, 200)}...`}
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
          <span className="text-blue-400">{props.activity}</span> by{' '}
          {props.author}
        </Typography>
        <div style={{ marginLeft: 'auto', color: 'gray' }}>
          <Typography variant="caption">{props.datePosted}</Typography>
          <Typography variant="caption" style={{ margin: '0 6px' }}>
            {props.minutesRead} mins Read
          </Typography>
          <Typography variant="caption">{props.views} Views</Typography>
        </div>
      </CardActions>
    </Card>
  );
};

export default PostCard;
