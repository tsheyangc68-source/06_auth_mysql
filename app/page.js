import Link from "next/link";

export default function Home() {
  return (
    <div className="auth-box">
      <h1>Auth Demo</h1>
      <p>Tsheyang Choden · Student ID: 6804776</p>
      <ul>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/dashboard">Dashboard (members only)</Link></li>
      </ul>
    </div>
  );
}