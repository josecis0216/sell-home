export default function (context) {
    console.log('[Middleware] auth redirect')
    if (!context.store.getters.isAuthenticated) {
        context.redirect('/admin/auth');
    }
}