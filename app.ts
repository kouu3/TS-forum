import connection from './db';

async function createPost(title: string, content: string): Promise<void> {
  const [result] = await connection.execute(
    'INSERT INTO posts (title, content) VALUES (?, ?)',
    [title, content]
  );
  console.log('Post Created:', result);
}

async function getAllPosts(): Promise<void> {
  const [posts] = await connection.query('SELECT * FROM posts');
  console.log('All Posts:', posts);
}

// テスト用の関数を実行
async function test() {
  await createPost('First Post', 'This is the content of the first post.');
  await getAllPosts();
}

test();
