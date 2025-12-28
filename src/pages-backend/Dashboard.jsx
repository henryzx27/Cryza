import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addEntry,
  searchEntry,
  updateEntry,
  deleteEntry
} from "../services-backend/api";
import toast from "react-hot-toast";

import {
  FiPlus,
  FiSearch,
  FiTrash2,
  FiSave,
  FiX,
  FiLogOut
} from "react-icons/fi";

const STATUS = [
  "New Lead","Contacted","Awaiting Response","Follow-Up Required",
  "In Discussion","Proposal Sent","In Progress",
  "Completed","Closed – Won","Closed – Lost","Not Interested"
];

const BUSINESS_TYPES = [
  "Event Management","Restaurant / Cafe","Gym / Fitness",
  "Real Estate","Education / Coaching","E-commerce",
  "Startup / SaaS","Other"
];

const SERVICES = [
  "Website Development",
  "Landing Page",
  "UI / UX Design",
  "Branding & Logo",
  "SEO",
  "Google Ads",
  "Meta Ads (Facebook / Instagram)",
  "Social Media Management",
  "E-commerce Website",
  "Maintenance & Support",
  "Other"
];

export default function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [adding, setAdding] = useState(false);
  const [searching, setSearching] = useState(false);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [form, setForm] = useState({
    businessName: "",
    contactNo: "",
    businessType: "",
    location: "",
    servicesNeeded: [],
    entryBy: "",
    notes: ""
  });

  useEffect(() => {
    if (token !== "cryza-admin-token") {
      localStorage.clear();
      navigate("/admin");
    }
  }, []);

  /* ---------- SERVICES TOGGLE ---------- */
  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      servicesNeeded: prev.servicesNeeded.includes(service)
        ? prev.servicesNeeded.filter((s) => s !== service)
        : [...prev.servicesNeeded, service]
    }));
  };

  /* ---------- ADD ---------- */
  const handleAdd = async () => {
    if (
      !form.businessName.trim() ||
      !form.contactNo.trim() ||
      !form.entryBy.trim() ||
      !form.businessType ||
      form.servicesNeeded.length === 0
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setAdding(true);
    await addEntry(
      {
        ...form,
        servicesNeeded: form.servicesNeeded.join(", ")
      },
      token
    );
    toast.success("Entry added");

    setShowAddModal(false);
    setForm({
      businessName:"",
      contactNo:"",
      businessType:"",
      location:"",
      servicesNeeded:[],
      entryBy:"",
      notes:""
    });
    setAdding(false);
  };

  /* ---------- SEARCH ---------- */
  const handleSearch = async (q = query) => {
    if (!q || searching) return;
    setSearching(true);
    const res = await searchEntry(q, token);
    setResults(res.results || []);
    setSearching(false);
  };

  /* ---------- UPDATE ---------- */
  const handleUpdate = async (r) => {
    await updateEntry({ id:r.id, status:r.status, notes:r.notes }, token);
    toast.success(`Updated ID ${r.id}`);
  };

  /* ---------- DELETE ---------- */
  const handleDelete = async (id) => {
    if (!confirm(`Delete entry ID ${id}?`)) return;
    await deleteEntry(Number(id), token);
    setResults(results.filter(r => r.id !== id));
    toast.success("Entry deleted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-8">

      {/* HEADER */}
      <div className="flex justify-between mb-10">
        <h1 className="text-2xl font-bold">Cryza Admin CRM</h1>
        <button
          onClick={() => { localStorage.clear(); navigate("/admin"); }}
          className="flex gap-2 text-red-400"
        >
          <FiLogOut /> Logout
        </button>
      </div>

      {/* TOOLS */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div
          onClick={() => setShowAddModal(true)}
          className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
        >
          <div className="flex gap-4">
            <div className="p-4 bg-indigo-600 rounded-xl"><FiPlus /></div>
            <div>
              <h2 className="font-semibold">Add New CRM</h2>
              <p className="text-sm text-white/60">Create new client entry</p>
            </div>
          </div>
        </div>

        <div
          onClick={() => setShowSearch(!showSearch)}
          className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
        >
          <div className="flex gap-4">
            <div className="p-4 bg-emerald-600 rounded-xl"><FiSearch /></div>
            <div>
              <h2 className="font-semibold">Search Entries</h2>
              <p className="text-sm text-white/60">Find & update CRM</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH PANEL */}
      {showSearch && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
          <div className="flex gap-3 mb-4">
            <input
              value={query}
              onChange={(e)=>{setQuery(e.target.value);handleSearch(e.target.value)}}
              placeholder="Search business name..."
              className="flex-1 p-3 bg-black border border-white/20 rounded-xl"
            />
            <button className="bg-white text-black px-4 rounded-xl">
              <FiSearch />
            </button>
          </div>

          {results.map(r => (
            <div key={r.id} className="bg-black/40 border border-white/10 p-4 rounded-xl mb-3">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-white/50">ID #{r.id}</p>
                  <h3>{r.businessName}</h3>
                  <p className="text-sm">{r.contactNo}</p>
                </div>
                <button onClick={()=>handleDelete(r.id)} className="text-red-400">
                  <FiTrash2 />
                </button>
              </div>

              <select
                defaultValue={r.status}
                onChange={(e)=>r.status=e.target.value}
                className="w-full mt-3 p-2 bg-black border border-white/20 rounded"
              >
                {STATUS.map(s=><option key={s}>{s}</option>)}
              </select>

              <textarea
                defaultValue={r.notes}
                onChange={(e)=>r.notes=e.target.value}
                className="w-full mt-2 p-2 bg-black border border-white/20 rounded"
              />

              <button
                onClick={()=>handleUpdate(r)}
                className="mt-2 bg-white text-black px-4 py-2 rounded flex gap-2"
              >
                <FiSave /> Update
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ADD MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-zinc-900 w-full max-w-xl p-6 rounded-2xl border border-white/10">

            <div className="flex justify-between mb-4">
              <h2 className="font-semibold">Add CRM</h2>
              <button onClick={()=>setShowAddModal(false)}><FiX /></button>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <input className="col-span-2 p-3 bg-black border border-white/20 rounded"
                placeholder="Business Name"
                value={form.businessName}
                onChange={e=>setForm({...form,businessName:e.target.value})}
              />

              <input className="p-3 bg-black border border-white/20 rounded"
                placeholder="Contact Number"
                value={form.contactNo}
                onChange={e=>setForm({...form,contactNo:e.target.value})}
              />

              <input className="p-3 bg-black border border-white/20 rounded"
                placeholder="Entry By"
                value={form.entryBy}
                onChange={e=>setForm({...form,entryBy:e.target.value})}
              />

              <select className="col-span-2 p-3 bg-black border border-white/20 rounded"
                value={form.businessType}
                onChange={e=>setForm({...form,businessType:e.target.value})}
              >
                <option value="">Select Business Type</option>
                {BUSINESS_TYPES.map(b=><option key={b}>{b}</option>)}
              </select>

              <input className="col-span-2 p-3 bg-black border border-white/20 rounded"
                placeholder="Location"
                value={form.location}
                onChange={e=>setForm({...form,location:e.target.value})}
              />

              {/* SERVICES CHECKBOXES */}
              <div className="col-span-2">
                <p className="mb-2 text-sm text-white/70">Services Needed</p>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES.map(s => (
                    <label key={s} className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={form.servicesNeeded.includes(s)}
                        onChange={()=>toggleService(s)}
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                className="col-span-2 p-3 bg-black border border-white/20 rounded min-h-[80px]"
                placeholder="Notes (optional)"
                value={form.notes}
                onChange={e=>setForm({...form,notes:e.target.value})}
              />

            </div>

            <button
              onClick={handleAdd}
              disabled={adding}
              className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-3 rounded-xl font-semibold"
            >
              {adding ? "Saving..." : "Submit Entry"}
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
