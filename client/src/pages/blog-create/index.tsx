import { RichTextEditor } from '../../components/rich-text-editor';
import { useState } from 'react';

export const BlogCreatePage = () => {
  const [blogContent, setBlogContent] = useState('');

  return (
    <div>
      <RichTextEditor
        value={blogContent}
        onChange={setBlogContent}
        className='size-full'
      />
    </div>
  );
};
