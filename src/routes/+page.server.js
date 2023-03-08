import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('nama_lengkap', data.get('nama_lengkap'));
		formData.append('instansi', data.get('instansi'));
		formData.append('hp', data.get('hp'));
		formData.append('tujuan', data.get('tujuan'));
		formData.append('foto', data.get('foto'));

		const res = await fetch('http://127.0.0.1:5000/guestbook', {
			method: 'POST',
			body: formData
		});

		throw redirect(302, '/greeting');
	}
};
