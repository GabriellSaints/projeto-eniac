import { Users, Shield, Store, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { User } from '../types';

interface AdminUsersScreenProps {
  users: User[];
}

export default function AdminUsersScreen({ users }: AdminUsersScreenProps) {
  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin':
        return <Shield className="text-red-500" size={20} />;
      case 'vendedor':
        return <Store className="text-purple-500" size={20} />;
      default:
        return <GraduationCap className="text-blue-500" size={20} />;
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase">Admin</span>;
      case 'vendedor':
        return <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold uppercase">Vendedor</span>;
      default:
        return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">Aluno</span>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Users className="text-amber-500" size={32} />
            Gerenciamento de Usuários
          </h1>
          <p className="text-slate-500 mt-2">Visão geral de todos os usuários cadastrados na plataforma.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm">
                <th className="p-4 font-semibold">Usuário</th>
                <th className="p-4 font-semibold">Contato</th>
                <th className="p-4 font-semibold">Papel</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user, index) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={user.id} 
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                        {getRoleIcon(user.role)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-500">RA: {user.ra}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-slate-700">{user.email}</p>
                  </td>
                  <td className="p-4">
                    {getRoleBadge(user.role)}
                  </td>
                  <td className="p-4">
                    <span className="flex items-center gap-1.5 text-sm text-green-600 font-medium">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      Ativo
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-amber-600 transition-colors text-sm font-semibold">
                      Editar
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
