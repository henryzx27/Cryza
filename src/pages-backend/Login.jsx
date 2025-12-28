import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services-backend/api";
import { Lock, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await login(password);
    if (res.success) {
      localStorage.setItem("token", res.token);
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
      <div className="w-[360px] p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <Lock /> <h2 className="text-xl font-semibold">Cryza Admin</h2>
        </div>

        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-black border border-white/20 rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded font-semibold"
        >
          Login <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
