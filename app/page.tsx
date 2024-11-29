import Layout from '../components/Layout';
import { AiFillCode } from 'react-icons/ai';

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <AiFillCode className="text-green-500 text-6xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to JS & CSS Minifier</h2>
        <p className="text-gray-600">
          Easily minify your JavaScript and CSS code for better performance!
        </p>
      </div>
    </Layout>
  );
}
