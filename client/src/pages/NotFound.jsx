import Button from '../components/Button';

function NotFound() {
  return (
    <div className='flex items-center justify-center h-dvh w-screen'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-3xl font-bold underline text-primary'>
          Page Not Found
        </h1>
        <Button as='link' to='/'>
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
